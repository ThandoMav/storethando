import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';
//import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/Layout';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import Lesedi3jantotry from '../components/Lesedi3jantotry';

//import Banner from '../components/Banner';
import About from '../components/About';
import Workouts from '../components/Workouts';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Work from '../components/Courses';
import Join from '../components/Join';
import Contact from '../components/Contact';
//import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
//import Productt from '../components/Product';
//import Heroa from '../components/Heroa';
import Herob from '../components/Herob';
import Servicesa from '../components/Servicesa';
import BackToTop from '../components/BackToTop';
//import Reservation from '../components/Reservation';
//import LawBanner from '../components/LawBanner';
import BlogHome from '../components/BlogHomeData';
import CtaBgImg from '../components/CtaBgImg';
import PopularCatPort from '../components/PopularCatPort';
import PopularProductsPortD from '../components/PopularProductsPort';
import ProductFeaturedCarousel from '../components/ProductFeaturedCarousel';
import DemoProductFeaturedCarousel from '../components/DemoProductFeaturedCarousel';

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
      <Herob />
      <Servicesa />
      <About />
      <Workouts />
      <Pricing />

      {/*<Community /><Newsletter />
       */}
      <Testimonials />
      <Join />
      <Faq />
      <BlogHome posts={posts}/>
      <Work />
      <Contact />
      <ProductFeaturedCarousel featuredProducts={featuredProducts} />
      <PopularCatPort categories={products} />
      <DemoProductFeaturedCarousel/>
      <PopularProductsPortD products={products} />
      <CtaBgImg />
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
