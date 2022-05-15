import React from 'react';
import styles from './PostItem.module.css';
import { MediaViewer } from '@/components/MediaViewer/MediaViewer';
import { UpsCounter } from '@/components/UpsCounter/UpsCounter';
import { MenuButton } from './MenuButton/MenuButton';
import { PostDetails } from './PostDetails/PostDetails';

interface PostItemProps {
  type: 'page' | 'tile' | 'small';
}

export const PostItem: React.FC<PostItemProps> = ({ type = 'small' }) => {
  if (type === 'tile') {
    return (
      <li className={styles.tileBox}>
        <div className={styles.tileTop}>
          <div className={styles.tileLeft}>
            <UpsCounter />
            <span className={styles.tileDivider}></span>
            <PostDetails type='tile' />
          </div>
          <div className={styles.rightSide}>
            <span className={styles.space}></span>
            <MenuButton />
          </div>
        </div>
        <MediaViewer type='full' />
      </li>
    );
  }

  if (type === 'page') {
    return (
      <section className={styles.boxPage}>
        <div className={styles.topSide}>
          <UpsCounter />
          <span className={styles.dividerPage}></span>
          <PostDetails type='page' />
        </div>
        <MediaViewer type='full' />
      </section>
    );
  }

  if (type === 'small') {
    return (
      <li className={styles.box}>
        <div className={styles.leftSide}>
          <div className={styles.smallUps}>
            <UpsCounter />
          </div>
          <span className={styles.divider}></span>
          <PostDetails type='small' />
        </div>
        <div className={styles.rightSide}>
          <MediaViewer type='preview' />
          {/* <span className={styles.space}></span>
          <MenuButton /> */}
        </div>
      </li>
    );
  }

  return null;
};
