import React from 'react';
import Head from 'next/head';
import { PostList } from '@/components/PostList/PostList';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { StoriesBar } from '@/components/PostList/StoriesBar/StoriesBar';

const Listing: NextPage = () => {
  const router = useRouter();
  const listing = router.asPath;
  const isSubreddit = listing.startsWith('/r/');

  return (
    <>
      <Head>
        <title>{listing} – Reddit</title>
      </Head>
      <section className={'container'}>
        {!isSubreddit && <StoriesBar />}
        <div style={{ marginTop: '3rem' }}></div>
        <PostList listing={listing} />
      </section>
    </>
  );
};

export default Listing;
