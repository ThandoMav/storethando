import React from 'react';
import ProductItem from './DataProductItemPort';

// import data
//import { data } from '../utils/data';

const Banner = ({products,addToCartHandler }) => {
  // destructure banner data
  return (
    <section className="relative py-16 p-x-32">
    <div className="container relative mx-auto">
        <div className="grid grid-cols-1 items-center">
            <h3 className="text-2xl leading-normal font-semibold">Recent Products</h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
    </div>

</section>

  );
};

export default Banner;
