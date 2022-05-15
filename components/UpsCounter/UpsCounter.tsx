import React from 'react';
import styles from './UpsCounter.module.css';
import { usePostContext } from '@/hooks/usePostContext';
import { formatNumber } from '@/utils/formatNumber';
import { getCookie } from 'cookies-next';
import { Icon_Upvote } from '@/components/icons/Icon_Upvote';
import { Icon_Downvote } from '@/components/icons/Icon_Downvote';

export const UpsCounter: React.FC = () => {
  const { name, ups, likes } = usePostContext();
  const [likeState, setLikeState] = React.useState(likes);

  const token = getCookie(`token`);

  async function handleUpvote() {
    await fetch('https://oauth.reddit.com/api/vote', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}` },
      body: new URLSearchParams({
        id: `${name}`,
        dir: '1',
      }),
    });
    setLikeState(true);
  }

  async function handleDownvote() {
    await fetch('https://oauth.reddit.com/api/vote', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}` },
      body: new URLSearchParams({
        id: `${name}`,
        dir: '-1',
      }),
    });
    setLikeState(false);
  }

  return (
    <div className={styles.upsCounter}>
      <button
        onClick={() => {
          handleUpvote();
        }}
        className={likeState ? styles.upsUp_active : styles.upsUp}>
        <Icon_Upvote />
      </button>
      <strong className={styles.upsCount}>{formatNumber(ups)}</strong>
      <button
        onClick={() => {
          handleDownvote();
        }}
        className={likeState === false ? styles.upsDown_active : styles.upsDown}>
        <Icon_Downvote />
      </button>
    </div>
  );
};
