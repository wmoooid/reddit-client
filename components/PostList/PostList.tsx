import React from 'react';
import styles from './PostList.module.css';
import { ListingsResponseChildrenType } from '@/types/listings';
import { PostItem } from './PostItem/PostItem';

interface PostListProps {
  posts: ListingsResponseChildrenType;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      <h2 className={styles.heading}>Hot</h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <>
            <PostItem
              key={post.data.id}
              title={post.data.title}
              subreddit={post.data.subreddit_name_prefixed}
              creatorDate={post.data.created}
              preview={post.data.thumbnail}
              karmaCount={post.data.ups}
              href={post.data.id}
            />
            <span className={styles.divider}></span>
          </>
        ))}
      </ul>
    </>
  );
};
