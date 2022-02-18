import React from 'react';
import styles from '@/styles/Index.module.css';
import useListing from '@/hooks/useListing';
import { PostList } from '@/components/PostList/PostList';
import { ListingsResponseType } from '@/types/listings';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

interface IndexPageProps {
  data: ListingsResponseType;
}

const Index: NextPage<IndexPageProps> = () => {
  const { data, isLoading, isError } = useListing('hot');

  return (
    <main className={styles.main}>
      <div className={styles.container}>{data?.data?.children && <PostList posts={data.data.children} />}</div>
    </main>
  );
};

export default Index;
