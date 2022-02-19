import React from 'react';
import styles from './PostItem.module.css';
import { UpsCounter } from './UpsCounter/UpsCounter';
import { PostDetails } from './PostDetails/PostDetails';
import { PostPreview } from './PostPreview/PostPreview';
import { MenuButton } from './MenuButton/MenuButton';

interface PostItemProps {
  isPostPage?: boolean;
  isTile?: boolean;
}

export const PostItem: React.FC<PostItemProps> = ({ isPostPage = false, isTile = false }) => {
  if (isTile) {
    return (
      <li className={styles.tileBox}>
        <div className={styles.tileTop}>
          <div className={styles.tileLeft}>
            <UpsCounter />
            <span className={styles.tileDivider}></span>
            <PostDetails isTile={isTile} />
          </div>
          <div className={styles.rightSide}>
            <span className={styles.space}></span>
            <MenuButton />
          </div>
        </div>
        <PostPreview isPostPage={isTile} />
      </li>
    );
  }

  if (isPostPage) {
    return (
      <section className={styles.boxPage}>
        <div className={styles.topSide}>
          <UpsCounter />
          <span className={styles.dividerPage}></span>
          <PostDetails isPostPage={isPostPage} />
        </div>
        <PostPreview isPostPage={isPostPage} />
      </section>
    );
  }
  return (
    <li className={styles.box}>
      <div className={styles.leftSide}>
        <UpsCounter />
        <span className={styles.divider}></span>
        <PostDetails />
      </div>
      <div className={styles.rightSide}>
        <PostPreview />
        <span className={styles.space}></span>
        <MenuButton />
      </div>
    </li>
  );
};
