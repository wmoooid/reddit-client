import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Header } from '@/components/Header/Header';
import { PostList } from '@/components/PostList/PostList';
import styles from '@/styles/Index.module.css';
import { ListingsResponseType } from '@/types/listings';

interface IndexPageProps {
  data: ListingsResponseType;
}

const Index: NextPage<IndexPageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <title>Another Reddit mirror</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{data.children && <PostList posts={data.children} />}</div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https:/oauth.reddit.com/hot', {
      method: 'get',
      headers: { Authorization: `bearer ${global.__token__}` },
    });
    const { data } = await response.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { props: { data: { null: true } } };
  }
};

export default Index;
