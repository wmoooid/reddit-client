import React from 'react';
import styles from './PostList.module.css';
import useListing from '@/hooks/useListing';
import { PostItem } from './PostItem/PostItem';
import { PostListPlaceholder } from './PostList.placeholder';

interface PostListProps {
  listingName: string;
}

export const PostList: React.FC<PostListProps> = ({ listingName }) => {
  const { posts, isLoading, isError } = useListing(listingName);

  if (isLoading) {
    return <PostListPlaceholder />;
  }

  if (isError) {
    return <PostListPlaceholder />;
  }

  if (posts) {
    return (
      <>
        <h2 className={styles.heading}>Popular posts</h2>
        <ul className={styles.list}>
          {posts.map((post) => (
            <>
              <PostItem
                key={post.data.id}
                title={post.data.title}
                subreddit={post.data.subreddit_name_prefixed}
                creatorDate={post.data.created}
                preview={post.data?.preview?.images[0].resolutions[1].url}
                karmaCount={post.data.ups}
                href={post.data.id}
              />
              <span className={styles.divider}></span>
            </>
          ))}
        </ul>
      </>
    );
  }

  return <PostListPlaceholder />;
};
