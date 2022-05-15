import React from 'react';
import styles from './StoriesList.module.css';
import { usePostContext } from '@/hooks/usePostContext';
import { MediaViewer } from '@/components/MediaViewer/MediaViewer';
import { UpsCounter } from '@/components/UpsCounter/UpsCounter';

export const StoriesItem: React.FC = () => {
  const { title, subreddit_name_prefixed } = usePostContext();

  return (
    <li className={styles.item}>
      <MediaViewer type='stories' />
      <div className={styles.overlay}>
        <div style={{ marginBottom: '1.25rem' }}>
          <UpsCounter />
        </div>
        <span className={styles.divider}></span>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <small className={styles.subreddit}>{subreddit_name_prefixed}</small>
        </div>
      </div>
    </li>
  );
};
