import { PostList } from '@/components/PostList/PostList';
import styles from '@/styles/Index.module.css';
import { ListingsResponseType } from '@/types/listings';
import useListing from 'hooks/useListing';
import type { NextPage } from 'next';
import React from 'react';

interface IndexPageProps {
  data: ListingsResponseType;
}

const Index: NextPage<IndexPageProps> = () => {
  // const router = useRouter();
  // if (router.query.code) {
  //   const token = getCookie(`token_${router.query.code}`);
  //   localStorage.setItem('__token__', `${token}`);
  // }
  // React.useEffect(() => {
  //   const __token__ = localStorage.getItem('__token__');
  // }, [])

  const { data, isLoading, isError } = useListing('hot');

  return (
    <main className={styles.main}>
      <div className={styles.container}>{data?.data?.children && <PostList posts={data.data.children} />}</div>
    </main>
  );
};

export default Index;
