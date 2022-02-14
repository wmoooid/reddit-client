import { PostList } from '@/components/PostList/PostList';
import styles from '@/styles/Index.module.css';
import { ListingsResponseType } from '@/types/listings';
import { getCookie } from 'cookies-next';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';

interface IndexPageProps {
  data: ListingsResponseType;
}

type FetcherArgs = [string, object];
const fetcher = (...args: FetcherArgs) => fetch(...args).then((res) => res.json());

const Index: NextPage<IndexPageProps> = () => {
  // const router = useRouter();
  // if (router.query.code) {
  //   const token = getCookie(`token_${router.query.code}`);
  //   localStorage.setItem('__token__', `${token}`);
  // }
  // React.useEffect(() => {
  //   const __token__ = localStorage.getItem('__token__');
  // }, [])

  const token = getCookie(`token`);

  const { data, error } = useSWR(
    [
      'https://oauth.reddit.com/hot',
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
  );

  console.log(data);

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
      <main className={styles.main}>
        <div className={styles.container}>{data?.data?.children && <PostList posts={data.data.children} />}</div>
      </main>
    </>
  );
};

export default Index;
