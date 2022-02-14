import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Index.module.css';
import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';
import { useRouter } from 'next/router';

interface PostPageProps {
  post: CommentsResponsePostInfoType;
  comments: CommentsResponseCommentsType;
}

type FetcherArgs = [string, object];

const fetcher = (...args: FetcherArgs) => fetch(...args).then((res) => res.json());

const PostPage: NextPage<PostPageProps> = () => {
  const token = getCookie('token');
  const router = useRouter();
  const { pid } = router.query;

  function usePost(pid: string | string[] | undefined) {
    const { data, error } = useSWR(
      [
        `https:/oauth.reddit.com/comments/${pid}?raw_json=1`,
        {
          method: 'get',
          headers: { Authorization: `bearer ${token}` },
        },
      ],
      fetcher,
    );

    const [postResponse, commentsResponse] = data || [];
    const [post] = postResponse?.data?.children || [];
    const [comments] = commentsResponse?.data?.children || [];

    return {
      post: post,
      comments: comments,
      isLoading: !error && !data,
      isError: error,
    };
  }

  const { post, comments, isLoading, isError } = usePost(pid);

  console.log(post);

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
        <div className={styles.container}>
          {!isLoading && (
            <PostItem
              isPostPage={true}
              title={post.data.title}
              subreddit={post.data.subreddit}
              creatorDate={post.data.created}
              preview={post.data.preview.images[0].source.url}
              karmaCount={post.data.ups}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default PostPage;
