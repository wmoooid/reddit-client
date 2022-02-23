import React from 'react';
import { PostList } from '@/components/PostList/PostList';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';

const Listing: NextPage = () => {
  const router = useRouter();

  const listing = router.asPath;

  return (
    <>
      <Head>
        <title>Another Reddit mirror</title>
      </Head>
      <PostList listing={listing} />
    </>
  );
};

export default Listing;
