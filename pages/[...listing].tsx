import React from 'react';
import { PostList } from '@/components/PostList/PostList';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Listing: NextPage = () => {
  const router = useRouter();

  const listing = router.asPath;

  return <PostList listing={listing} />;
};

export default Listing;
