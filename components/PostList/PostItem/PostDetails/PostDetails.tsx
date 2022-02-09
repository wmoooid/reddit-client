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
  const unformattedDate = new Date(creatorDate);
  const options: any = { month: 'long', day: 'numeric' };
  const formatedDate = unformattedDate.toLocaleDateString('en-GB', options);

  const router = useRouter();

  return (
    <>
      {isPostPage ? (
        <div className={styles.postDetailsPage}>
          <div className={styles.creatorInfoPage}>
            <small className={styles.subreddit}>{subreddit}</small>
            <small className={styles.creatorDate}>{formatedDate}</small>
          </div>
          <button className={styles.button} type='button' onClick={() => router.back()}>
            <h1 className={styles.titlePage}>{title}</h1>
          </button>
        </div>
      ) : (
        <div className={styles.postDetails}>
          <Link href={`/post/${href}`}>
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
