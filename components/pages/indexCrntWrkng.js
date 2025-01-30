import Layout from '../components/Layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
//import PopularCatPort from '../components/PopularCatPort';
//import PopularProductsPortD from '../components/PopularProductsPort';


export default function Home() {
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
      <Work />
      <BlogHome />

      <Contact />
    {/*  <PopularCatPort />
      <PopularProductsPortD />
       */}
      <CtaBgImg />
      <BackToTop />
    </Layout>
  );
}
