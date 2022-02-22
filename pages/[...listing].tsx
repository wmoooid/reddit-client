import React from 'react';
import styles from '@/styles/Index.module.css';
import { PostList } from '@/components/PostList/PostList';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Listing: NextPage = () => {
  const router = useRouter();

  const listing = router.asPath;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <PostList listing={listing} />
      </div>
    </main>
  );
};

export default Listing;
