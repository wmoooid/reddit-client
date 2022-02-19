import React from 'react';
import styles from '@/styles/Index.module.css';
import { PostList } from '@/components/PostList/PostList';
import { ListingsResponseType } from '@/types/listings';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

interface IndexPageProps {
  data: ListingsResponseType;
}

const Index: NextPage<IndexPageProps> = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <PostList listingName={'hot'} />
      </div>
    </main>
  );
};

export default Index;
