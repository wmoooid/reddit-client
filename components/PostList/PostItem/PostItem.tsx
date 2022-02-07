import React from 'react';
import styles from './PostItem.module.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { PostDetails } from './PostDetails/PostDetails';
import { PostPreview } from './PostPreview/PostPreview';
import { MenuButton } from './MenuButton/MenuButton';

interface PostItemProps {
  title: string;
  subreddit: string;
  creatorDate: number;
  preview: string;
  karmaCount: number;
}

export const PostItem: React.FC<PostItemProps> = ({ title, subreddit, creatorDate, preview, karmaCount }) => {
  return (
    <li className={styles.box}>
      <div className={styles.leftSide}>
        <KarmaCounter karmaCount={karmaCount} />
        <span className={styles.divider}></span>
        <PostDetails title={title} subreddit={subreddit} creatorDate={creatorDate} />
      </div>
      <div className={styles.rightSide}>
        <PostPreview preview={preview} />
        <span className={styles.space}></span>
        <MenuButton />
      </div>
    </li>
  );
};
