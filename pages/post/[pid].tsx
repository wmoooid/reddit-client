import React from 'react';
import usePost from '@/hooks/usePost';
import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';
import { useRouter } from 'next/router';
import { PostProvider } from '@/hooks/usePostContext';
import type { NextPage } from 'next';
import { PostPagePlaceholder } from '@/components/placeholders/PostPage.placeholder';
import Head from 'next/head';

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

  if (isLoading) {
    return <PostPagePlaceholder />;
  }

  if (isError) {
    return <PostPagePlaceholder />;
  }

  return (
    <>
      <Head>
        <title>{post.data ? post.data.title : 'Another Reddit mirror'}</title>
      </Head>
      <PostProvider value={post.data}>
        <PostItem isPostPage={true} />
      </PostProvider>
    </>
  );
};

export default PostPage;
