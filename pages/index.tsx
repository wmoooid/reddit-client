import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header/Header';
import { PostList } from '../components/PostList/PostList';
import styles from '../styles/Index.module.css';

const Index: NextPage = () => {
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
        <div className={styles.container}>
          <PostList />
        </div>
      </main>
    </>
  );
};

export default Index;
