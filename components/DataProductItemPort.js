/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ProductItem({ product,addToCartHandler }) {
  return (

    <div className="group">
        <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-52 rounded-2xl"
              ></Image>
            </Link>
            <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                <button onClick={() => addToCartHandler(product)} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</button>
            </div>

            <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                <li><Link href={`/product/${product.slug}`} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i className="mdi mdi-heart"></i></Link></li>
            </ul>
        </div>

        <div className="mt-4">
            <Link href={`/product/${product.slug}`} className="hover:text-indigo-600 text-lg font-semibold">{product.name}</Link>
            <p className="mb-2">{product.brand}</p>
            <div className="flex justify-between items-center mt-1">
                <p className="text-green-600"><p>${product.price}</p></p>
                <ul className="font-medium text-amber-400 list-none">
                    <li className="inline"><i className="mdi mdi-star"></i></li>
                    <li className="inline"><i className="mdi mdi-star"></i></li>
                    <li className="inline"><i className="mdi mdi-star"></i></li>
                    <li className="inline"><i className="mdi mdi-star"></i></li>
                    <li className="inline"><i className="mdi mdi-star"></i></li>
                </ul>
            </div>
        </div>
    </div>

  );
}
