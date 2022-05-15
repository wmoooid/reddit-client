import React from 'react';
import styles from './StoriesList.module.css';
import useInfiniteListing from '@/hooks/useInfiniteListing';
import { PostProvider } from '@/hooks/usePostContext';
import { MediaViewer } from '../MediaViewer/MediaViewer';
import { UpsCounter } from '@/components/UpsCounter/UpsCounter';

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
            <li className={styles.item}>
              <MediaViewer type='stories' />
              <div className={styles.overlay}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <UpsCounter />
                </div>
                <span className={styles.divider}></span>
                <div className={styles.info}>
                  <h3 className={styles.title}>{post.data.title}</h3>
                  <small className={styles.subreddit}>{post.data.subreddit_name_prefixed}</small>
                </div>
              </div>
            </li>
          </PostProvider>
        ))}
      </ul>
    </div>
  );
};
