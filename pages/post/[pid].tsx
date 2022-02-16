import React from 'react';
import styles from '@/styles/Index.module.css';

import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import usePost from '@/hooks/usePost';

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
  );
};

export default PostPage;
