import Layout from '../components/Layout';

import Work from '../components/Courses';
//import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import BackToTop from '../components/BackToTop';
import BlogHome from '../components/BlogHomeData';
import CtaBgImg from '../components/CtaBgImg';
import PopularCatPort from '../components/DemoPopularCatPort';
import PopularProductsPortD from '../components/DemoPopularProductsPortD';
import ProductFeaturedCarousel from '../components/DemoProductFeaturedCarousel';
import DemoProductFeaturedCarousel from '../components/DemoProductFeaturedCarousel';
import DemoFeaturedAccs from '../components/DemoFeaturedAccs';


export default function Home() {

  return (
    <Layout title="Home Page">
      <ProductFeaturedCarousel />
      <Banner />
      <PopularCatPort  />
      <DemoProductFeaturedCarousel/>
      <PopularProductsPortD  />
      <CtaBgImg />
      <DemoFeaturedAccs/> 
      <Work />
      <BackToTop />
    </Layout>
  );
}
