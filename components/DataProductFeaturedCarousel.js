import React from 'react';
import Link from 'next/link';
// import data
import { data } from '../utils/data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { BsBuildings, BsFillTagsFill } from 'react-icons/bs';

const FeaturedCarousel = () => {
  return (
    <>
      <Carousel showThumbs={false} autoPlay>
        {data.products.map((product) => (
          <div
            key={product._id}
            className="py-28 relative bg-center bg-no-repeat bg-cover w-full h-96"
            style={{ backgroundImage: `url('${product.image}')` }}
          >
            <div className="absolute inset-0 bg-slate-900/30"></div>
            {/*
          <Link className="flex" href={`/product/${product.slug}`} passHref>
          <div className="flex flex-col rounded-lg p-4 mb-5 items-center justify-center absolute w-full h-full">
           <BsBuildings />
            <p className="text-white mb-4 text-shadow font-semibold text-xs"> {product.name}</p>
            <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{product.name}</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
              <BsFillTagsFill />
              <p className="inline align-middle text-white text-shadow ml-2 mb-5 font-medium">From R{product.price}</p>
            </div>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary mb-5"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Buy Now!
            </button>
          </div>
          </Link>
    */}
            <div className="grid grid-cols-1 text-center z-3">
              <h3 className="mb-4 md:text-4xl text-3xl text-white font-bold">
                End of Season Clearance <br /> Sale upto 30%
              </h3>

              <p className="text-white/80 max-w-xl mx-auto">
                Start working with Techwind that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>

              <div className="mt-6">
                <Link
                  href={`/search`}
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                >
                  <i className="mdi mdi-cart-outline"></i> Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default FeaturedCarousel;
