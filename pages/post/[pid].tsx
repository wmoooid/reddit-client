import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Index.module.css';
import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';

interface PostPageProps {
  post: CommentsResponsePostInfoType;
  comments: CommentsResponseCommentsType;
}

const PostPage: NextPage<PostPageProps> = ({ post, comments }) => {
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
          <PostItem
            isPostPage={true}
            title={post.data.title}
            subreddit={post.data.subreddit}
            creatorDate={post.data.created}
            preview={post.data.preview.images[0].source.url.replaceAll('amp;', '')}
            karmaCount={post.data.ups}
          />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.query;
  const response = await fetch(`https:/oauth.reddit.com/comments/${pid}`, {
    method: 'get',
    headers: { Authorization: `bearer ${global.__token__}` },
  });
  const [postResponse, commentsResponse] = await response.json();
  const [post] = postResponse.data.children;
  const [comments] = commentsResponse.data.children;
  return { props: { post, comments } };
};

export default PostPage;
