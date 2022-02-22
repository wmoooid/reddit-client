import React from 'react';
import styles from './PostDetails.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import { usePostContext } from '@/hooks/usePostContext';

interface PostDetailsProps {
  isPostPage?: boolean;
  isTile?: boolean;
}

export const PostDetails: React.FC<PostDetailsProps> = ({ isPostPage = false, isTile = false }) => {
  const { title, subreddit_name_prefixed, created, id } = usePostContext();

  const unformattedDate = new Date(created * 1000);
  const formatedDate = formatDistanceToNow(unformattedDate, { addSuffix: true });

  const router = useRouter();

  if (isTile) {
    return (
      <div className={styles.postDetailsTile}>
        <Link href={`/post/${id}`} shallow={true}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <div className={styles.creatorInfo}>
          <Link href={`/${subreddit_name_prefixed}`} shallow={true}>
            <small className={styles.subreddit}>{subreddit_name_prefixed}</small>
          </Link>
          <small className={styles.creatorDate}>{formatedDate}</small>
        </div>
      </div>
    );
  }

  if (isPostPage) {
    return (
      <div className={styles.postDetailsPage}>
        <div className={styles.creatorInfoPage}>
          <Link href={`/${subreddit_name_prefixed}`} shallow={true}>
            <small className={styles.subreddit}>{subreddit_name_prefixed}</small>
          </Link>
          <small className={styles.creatorDatePage}>{formatedDate}</small>
        </div>
        <h1 onClick={() => router.back()} className={styles.titlePage}>
          {title}
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.postDetails}>
      <Link href={`/post/${id}`} shallow={true}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.creatorInfo}>
        <Link href={`/${subreddit_name_prefixed}`} shallow={true}>
          <small className={styles.subreddit}>{subreddit_name_prefixed}</small>
        </Link>
        <small className={styles.creatorDate}>{formatedDate}</small>
      </div>
    </div>
  );
};
