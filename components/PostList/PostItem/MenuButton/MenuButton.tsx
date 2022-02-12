import React from 'react';
import styles from './MenuButton.module.css';

export const MenuButton = () => {
  return (
    <button className={styles.menuButton}>
      <svg width='4' height='20' viewBox='0 0 4 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='2' cy='2' r='2' fill='#B8B8BF' />
        <circle cx='2' cy='10' r='2' fill='#B8B8BF' />
        <circle cx='2' cy='18' r='2' fill='#B8B8BF' />
      </svg>
    </button>
  );
};