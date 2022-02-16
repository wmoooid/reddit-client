import { PostItem } from '@/components/PostList/PostItem/PostItem';
import styles from '@/styles/Index.module.css';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';
import usePost from 'hooks/usePost';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface PostPageProps {
  post: CommentsResponsePostInfoType;
  comments: CommentsResponseCommentsType;
  isLoading: boolean;
  isError: boolean;
}

const PostPage: NextPage<PostPageProps> = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { post, comments, isLoading, isError } = usePost(pid) as PostPageProps;

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
              isVideo={post.data.is_video}
              title={post.data.title}
              subreddit={post.data.subreddit}
              creatorDate={post.data.created}
              preview={post.data.preview.images[0].source.url}
              video={post.data.is_video ? post.data.media?.reddit_video.hls_url : undefined}
              karmaCount={post.data.ups}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default PostPage;
