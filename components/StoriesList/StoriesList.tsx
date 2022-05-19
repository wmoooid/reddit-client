import React from 'react';
import styles from './StoriesList.module.css';
import useInfiniteListing from '@/hooks/useInfiniteListing';
import { PostProvider } from '@/hooks/usePostContext';
import { StoriesItem } from './StoriesItem/StoriesItem';
import { Waypoint } from 'react-waypoint';

interface StoriesListProps {
  listing: string;
}

export const StoriesList: React.FC<StoriesListProps> = ({ listing }) => {
  const { posts, isLoading, isValidating, isError, size, setSize } = useInfiniteListing(`/${listing}`);
  const storiesList = posts.filter((item) => item.data.is_video);

  const handleEnterAnchor = () => {
    setSize(size + 1);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {storiesList.map((post) => (
            <PostProvider key={post.data.id} value={post.data}>
              <StoriesItem />
            </PostProvider>
          ))}
          <div className={styles.anchorBox}>
            <Waypoint onEnter={handleEnterAnchor}>
              <div className={styles.anchor}></div>
            </Waypoint>
          </div>
        </ul>
      </div>
    </section>
  );
};
