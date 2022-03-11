import React from 'react';
import styles from './Userbar.module.css';
import useMe from '@/hooks/useMe';
import { UserbarPlaceholder } from '../../placeholders/Userbar.placeholer';

export const Userbar: React.FC = () => {
  const { data, isLoading, isError } = useMe();

  const href = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.REDIRECT_URL}&duration=permanent&scope=read submit identity mysubreddits vote`;

  if (isLoading) {
    return (
      <a href={href}>
        <UserbarPlaceholder />
      </a>
    );
  }

  if (isError) {
    return (
      <a href={href}>
        <UserbarPlaceholder />
      </a>
    );
  }

  if (data) {
    return (
      <a className={styles.profile} href={href}>
        <span className={styles.userAvatar}>
          <img className={styles.userAvatarImg} src={data.icon_img} alt='User avatar' />
        </span>
        <span className={styles.userName}>{data.name}</span>
      </a>
    );
  }

  return (
    <a className={styles.profile} href={href}>
      <svg width='2rem' height='2rem' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M40 20C40 8.98 31.02 0 20 0C8.98 0 0 8.98 0 20C0 25.8 2.5 31.02 6.46 34.68C6.46 34.7 6.46 34.7 6.44 34.72C6.64 34.92 6.88 35.08 7.08 35.26C7.2 35.36 7.3 35.46 7.42 35.54C7.78 35.84 8.18 36.12 8.56 36.4C8.7 36.5 8.82 36.58 8.96 36.68C9.34 36.94 9.74 37.18 10.16 37.4C10.3 37.48 10.46 37.58 10.6 37.66C11 37.88 11.42 38.08 11.86 38.26C12.02 38.34 12.18 38.42 12.34 38.48C12.78 38.66 13.22 38.82 13.66 38.96C13.82 39.02 13.98 39.08 14.14 39.12C14.62 39.26 15.1 39.38 15.58 39.5C15.72 39.54 15.86 39.58 16.02 39.6C16.58 39.72 17.14 39.8 17.72 39.86C17.8 39.86 17.88 39.88 17.96 39.9C18.64 39.96 19.32 40 20 40C20.68 40 21.36 39.96 22.02 39.9C22.1 39.9 22.18 39.88 22.26 39.86C22.84 39.8 23.4 39.72 23.96 39.6C24.1 39.58 24.24 39.52 24.4 39.5C24.88 39.38 25.38 39.28 25.84 39.12C26 39.06 26.16 39 26.32 38.96C26.76 38.8 27.22 38.66 27.64 38.48C27.8 38.42 27.96 38.34 28.12 38.26C28.54 38.08 28.96 37.88 29.38 37.66C29.54 37.58 29.68 37.48 29.82 37.4C30.22 37.16 30.62 36.94 31.02 36.68C31.16 36.6 31.28 36.5 31.42 36.4C31.82 36.12 32.2 35.84 32.56 35.54C32.68 35.44 32.78 35.34 32.9 35.26C33.12 35.08 33.34 34.9 33.54 34.72C33.54 34.7 33.54 34.7 33.52 34.68C37.5 31.02 40 25.8 40 20ZM29.88 29.94C24.46 26.3 15.58 26.3 10.12 29.94C9.24 30.52 8.52 31.2 7.92 31.94C4.88 28.86 3 24.64 3 20C3 10.62 10.62 3 20 3C29.38 3 37 10.62 37 20C37 24.64 35.12 28.86 32.08 31.94C31.5 31.2 30.76 30.52 29.88 29.94Z'
          fill='var(--grey75)'
        />
        <path
          d='M20 9.85938C15.86 9.85938 12.5 13.2194 12.5 17.3594C12.5 21.4194 15.68 24.7194 19.9 24.8394C19.96 24.8394 20.04 24.8394 20.08 24.8394C20.12 24.8394 20.18 24.8394 20.22 24.8394C20.24 24.8394 20.26 24.8394 20.26 24.8394C24.3 24.6994 27.48 21.4194 27.5 17.3594C27.5 13.2194 24.14 9.85938 20 9.85938Z'
          fill='var(--grey75)'
        />
      </svg>
      <span className={styles.userName}>Log in</span>
    </a>
  );
};
