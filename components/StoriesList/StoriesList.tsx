import React from 'react';
import styles from './StoriesList.module.css';
import useInfiniteListing from '@/hooks/useInfiniteListing';
import { PostProvider } from '@/hooks/usePostContext';
import { StoriesItem } from './StoriesItem/StoriesItem';

interface StoriesListProps {
  listing: string;
}

export const StoriesList: React.FC<StoriesListProps> = ({ listing }) => {
  const { posts, isLoading, isValidating, isError, size, setSize } = useInfiniteListing(`/${listing}`);

  const storiesList = posts.filter((item) => item.data.is_video);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {storiesList.map((post) => (
          <PostProvider key={post.data.id} value={post.data}>
            <StoriesItem />
          </PostProvider>
        ))}
      </ul>
    </div>
  );
};
