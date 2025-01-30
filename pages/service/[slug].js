import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import PostDetail from '../../components/Postdetail';
import Loader from '../../components/Loader';
import Service from '../../models/Service';
import db from '../../utils/db';

export default function ServiceScreen(props) {
  const { service, featuredServices, categories } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (!service) {
    return <Layout title="Service Not Found">Service Not Found</Layout>;
  }

  return (
    <Layout title={service.name}>
      <div className="py-2">
        <Link href="/search-services">Back to Services</Link>
      </div>
      <div className="container mx-auto py-12 my-12 mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={service} />

            <div className="py-2">
              <Link href="/search-services">BY ADMIN</Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  {service.slug ? 'Related Services' : 'Recent Service'}
                </h3>
                {featuredServices.map((post, index) => (
                  <div key={index} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                      <Image
                        alt={post.name}
                        height="60px"
                        width="60px"
                        unoptimized
                        className="align-middle rounded-full"
                        src={post.image}
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-gray-500 font-xs">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                      </p>
                      <Link
                        href={`/service/${post.slug}`}
                        className="text-md"
                        key={index}
                        passHref
                      >
                        {post.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  Categories
                </h3>
                {categories.map((category, index) => (
                  <Link key={index} href={`/service/${category.slug}`} passHref>
                    <span
                      className={`cursor-pointer block ${
                        index === categories.length - 1
                          ? 'border-b-0'
                          : 'border-b'
                      } pb-3 mb-3`}
                    >
                      {category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const service = await Service.findOne({ slug }).lean();
  const featuredServices = await Service.find({ isFeatured: true }).lean();
  const categories = await Service.find().distinct('category');

  await db.disconnect();
  return {
    props: {
      service: service ? db.convertDocToObj(service) : null,
      featuredServices,
      categories,
    },
  };
}
