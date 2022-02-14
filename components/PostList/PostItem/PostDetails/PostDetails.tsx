import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './PostDetails.module.css';

interface PostDetailsProps {
  isPostPage?: boolean;
  title: string;
  subreddit: string;
  creatorDate: number;
  href?: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ isPostPage = false, title, subreddit, creatorDate, href }) => {
  const unformattedDate = new Date(creatorDate * 1000);
  const formatedDate = formatDistanceToNow(unformattedDate, { addSuffix: true });

  const router = useRouter();

  return (
    <>
      {isPostPage ? (
        <div className={styles.postDetailsPage}>
          <div className={styles.creatorInfoPage}>
            <small className={styles.subreddit}>{subreddit}</small>
            <small className={styles.creatorDate}>{formatedDate}</small>
          </div>
          <h1 onClick={() => router.back()} className={styles.titlePage}>
            {title}
          </h1>
        </div>
      ) : (
        <div className={styles.postDetails}>
          <Link href={`/post/${href}`} shallow={true}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <div className={styles.creatorInfo}>
            <small className={styles.subreddit}>{subreddit}</small>
            <small className={styles.creatorDate}>{formatedDate}</small>
          </div>
        </div>
      )}
    </>
  );
};
