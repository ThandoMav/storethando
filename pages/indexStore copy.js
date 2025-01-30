import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';

import Layout from '../components/Layout';

import Work from '../components/Courses';
//import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import BackToTop from '../components/BackToTop';
import BlogHome from '../components/BlogHomeData';
import CtaBgImg from '../components/CtaBgImg';
import PopularCatPort from '../components/DemoPopularCatPort';
import PopularProductsPortD from '../components/DataPopularProductsPortD';
import ProductFeaturedCarousel from '../components/DataProductFeaturedCarousel';
import DemoProductFeaturedCarousel from '../components/DataProductFeaturedCarousel';
import DemoFeaturedAccs from '../components/DataFeaturedAccs';

import Product from '../models/Product';
import Post from '../models/Post';
import db from '../utils/db';

export default function Home({posts, products,featuredProducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  return (
    <Layout title="Home Page">
      <ProductFeaturedCarousel featuredProducts={featuredProducts} />
      <PopularCatPort  />
      <DemoProductFeaturedCarousel/>
      <PopularProductsPortD products={products} addToCartHandler={addToCartHandler}/>
      <CtaBgImg />
      <DemoFeaturedAccs/> 
      <Work posts={posts} />
      <BackToTop />
    </Layout>
  );
}


export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean().limit(6);
  const posts = await Post.find().lean().limit(6);
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
      posts: posts.map(db.convertDocToObj),
    },
  };
}
