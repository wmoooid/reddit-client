import React from 'react';
import styles from './PostDetails.module.css';

interface PostDetailsProps {
  title: string;
  subreddit: string;
  creatorDate: number;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ title, subreddit, creatorDate }) => {
  const unformattedDate = new Date(creatorDate);
  const options: any = { month: 'long', day: 'numeric' };
  const formatedDate = unformattedDate.toLocaleDateString('en-GB', options);

  return (
    <div className={styles.postDetails}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.creatorInfo}>
        <small className={styles.subreddit}>{subreddit}</small>
        <small className={styles.creatorDate}>{formatedDate}</small>
      </div>
    </div>
  );
};
