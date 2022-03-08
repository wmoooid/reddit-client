import React from 'react';
import styles from './TopBar.module.css';
import { PostListContext } from '../PostList';

export const TopBar: React.FC = () => {
  const { listing, setIsTile } = React.useContext(PostListContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{listing}</h2>
      <div className={styles.viewPicker}>
        <span
          className={styles.viewPickerIcon}
          onClick={() => {
            setIsTile(false);
          }}>
          <svg width='1.5rem' height='1.5rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='2.75' y='2.75' width='18.5' height='7.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
            <rect x='2.75' y='13.75' width='18.5' height='7.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
          </svg>
        </span>
        <span
          className={styles.viewPickerIcon}
          onClick={() => {
            setIsTile(true);
          }}>
          <svg width='1.5rem' height='1.5rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='2.75' y='2.75' width='18.5' height='18.5' rx='1.25' stroke='var(--grey75)' strokeWidth='1.5' />
          </svg>
        </span>
      </div>
    </div>
  );
};
