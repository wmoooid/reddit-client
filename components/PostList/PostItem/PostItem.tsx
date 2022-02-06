import React from 'react';
import styles from './PostItem.module.css';

interface PostItemProps {
  title: string;
  subreddit: string;
  creatorDate: string;
  preview: string;
  karmaCount: string;
}

export const PostItem: React.FC<PostItemProps> = ({ title, subreddit, creatorDate, preview, karmaCount }) => {
  const unformattedDate = new Date(creatorDate);
  const options: any = { month: 'long', day: 'numeric' };
  const formatedDate = unformattedDate.toLocaleDateString('en-GB', options);

  return (
    <li className={styles.box}>
      <div className={styles.leftSide}>
        <div className={styles.karmaCounter}>
          <button className={styles.karmaUp}>
            <svg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.81289 0.870393C7.97342 -0.290131 9.86658 -0.290131 11.0271 0.870393L17.5471 7.39039C17.9376 7.78092 17.9376 8.41408 17.5471 8.80461C17.1566 9.19513 16.5234 9.19513 16.1329 8.80461L9.61289 2.28461C9.23342 1.90513 8.60658 1.90513 8.22711 2.28461L1.70711 8.80461C1.31658 9.19513 0.683417 9.19513 0.292893 8.80461C-0.0976311 8.41408 -0.0976311 7.78092 0.292893 7.39039L6.81289 0.870393Z'
                fill='#B8B8BF'
              />
            </svg>
          </button>
          <strong className={styles.karmaCount}>{karmaCount}</strong>
          <button className={styles.karmaDown}>
            <svg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.0272 8.22702C9.86667 9.38754 7.97351 9.38754 6.81298 8.22702L0.292981 1.70702C-0.097543 1.31649 -0.097543 0.683328 0.292981 0.292804C0.683507 -0.0977202 1.31667 -0.0977202 1.70719 0.292804L8.22719 6.8128C8.60667 7.19228 9.2335 7.19228 9.61298 6.8128L16.133 0.292806C16.5235 -0.0977188 17.1567 -0.0977188 17.5472 0.292806C17.9377 0.68333 17.9377 1.31649 17.5472 1.70702L11.0272 8.22702Z'
                fill='#B8B8BF'
              />
            </svg>
          </button>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.postDetails}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.creatorInfo}>
            <small className={styles.subreddit}>{subreddit}</small>
            <small className={styles.creatorDate}>{formatedDate}</small>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.preview}>
          <img className={styles.previewImage} src={preview} alt='Post preview' />
        </div>
        <span className={styles.space}></span>
        <button className={styles.menuButton}>
          <svg width='4' height='20' viewBox='0 0 4 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='2' cy='2' r='2' fill='#B8B8BF' />
            <circle cx='2' cy='10' r='2' fill='#B8B8BF' />
            <circle cx='2' cy='18' r='2' fill='#B8B8BF' />
          </svg>
        </button>
      </div>
    </li>
  );
};
