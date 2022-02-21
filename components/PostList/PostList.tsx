import React from 'react';
import styles from './PostList.module.css';
import useListing from '@/hooks/useListing';
import { PostItem } from './PostItem/PostItem';
import { PostListPlaceholder } from '../placeholders/PostList.placeholder';
import { PostProvider } from '@/hooks/usePostContext';
import useInfiniteListing from '@/hooks/useInfiniteListing';

interface PostListProps {
  listingName: string;
}

export const PostList: React.FC<PostListProps> = ({ listingName }) => {
  const { posts, isLoading, isValidating, isError, size, setSize } = useInfiniteListing(listingName);

  const [isTile, setIsTile] = React.useState(true);

  if (isLoading) {
    return <PostListPlaceholder />;
  }

  if (isError) {
    return <PostListPlaceholder />;
  }

  if (posts) {
    return (
      <>
        <div className={styles.topBar}>
          <h2 className={styles.heading}>Popular posts</h2>
          <div className={styles.viewPicker}>
            <span
              className={styles.viewPickerIcon}
              onClick={() => {
                setIsTile(false);
              }}>
              <svg width='1.5rem' height='1.5rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect x='2.75' y='2.75' width='18.5' height='7.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
                <rect x='2.75' y='13.75' width='18.5' height='7.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
              </svg>
            </span>
            <span
              className={styles.viewPickerIcon}
              onClick={() => {
                setIsTile(true);
              }}>
              <svg width='1.5rem' height='1.5rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect x='2.75' y='2.75' width='18.5' height='18.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
              </svg>
            </span>
          </div>
        </div>
        <ul className={styles.list}>
          {posts.map((post) => (
            <PostProvider key={`${post.data.id}_provider`} value={post.data}>
              <PostItem key={post.data.id} isTile={isTile} />
              <span className={styles.divider}></span>
            </PostProvider>
          ))}
        </ul>
        {isValidating ? (
          <div className='placeholder'>
            <div className={styles.moreLoading}>Loading...</div>
          </div>
        ) : (
          <button className={styles.moreButton} onClick={() => setSize(size + 1)}>
            Load More
          </button>
        )}
      </>
    );
  }

  return <PostListPlaceholder />;
};
