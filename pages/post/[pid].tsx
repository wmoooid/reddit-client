import React from 'react';
import styles from '@/styles/Index.module.css';
import usePost from '@/hooks/usePost';
import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';
import { useRouter } from 'next/router';
import { PostProvider } from '@/hooks/usePostContext';
import type { NextPage } from 'next';

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

  console.log(post);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <PostProvider value={post.data}>
          <PostItem isPostPage={true} />
        </PostProvider>
      </div>
    </main>
  );
};

export default PostPage;
