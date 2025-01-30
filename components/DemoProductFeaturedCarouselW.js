import React from 'react';
import Link from 'next/link';
// import data
import { data } from '../utils/data';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsBuildings, BsFillTagsFill } from 'react-icons/bs';

const FeaturedCarousel = () => {
  return (
    <>
      <Carousel showThumbs={false} autoPlay>
        {data.products.map((product) => (
          <div
            key={product._id}
            className="relative bg-center bg-no-repeat bg-cover w-full h-96"
            style={{ backgroundImage: `url('${product.image}')` }}
          >
            <div className="absolute inset-0 bg-slate-900/30"></div>
            <Link className="flex" href={`/product/${product.slug}`} passHref>
              <div className="flex flex-col rounded-lg p-4 mb-5 items-center justify-center absolute w-full h-full">
                <BsBuildings />
                <p className="text-white mb-4 text-shadow font-semibold text-xs">
                  {' '}
                  {product.name}
                </p>
                <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
                  {product.name}
                </p>
                <div className="flex items-center absolute bottom-5 w-full justify-center">
                  <BsFillTagsFill />
                  <p className="inline align-middle text-white text-shadow ml-2 mb-5 font-medium">
                    From R{product.price}
                  </p>
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
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default FeaturedCarousel;
