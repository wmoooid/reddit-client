import React from 'react';
import styles from './UpsCounter.module.css';
import { usePostContext } from '@/hooks/usePostContext';

export const UpsCounter: React.FC = () => {
  const { ups } = usePostContext();

  const formatUps = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(ups);

  return (
    <div className={styles.karmaCounter}>
      <button className={styles.karmaUp}>
        <svg width='1rem' height='0.5rem' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.81289 0.870393C7.97342 -0.290131 9.86658 -0.290131 11.0271 0.870393L17.5471 7.39039C17.9376 7.78092 17.9376 8.41408 17.5471 8.80461C17.1566 9.19513 16.5234 9.19513 16.1329 8.80461L9.61289 2.28461C9.23342 1.90513 8.60658 1.90513 8.22711 2.28461L1.70711 8.80461C1.31658 9.19513 0.683417 9.19513 0.292893 8.80461C-0.0976311 8.41408 -0.0976311 7.78092 0.292893 7.39039L6.81289 0.870393Z'
            fill='var(--grey75)'
          />
        </svg>
      </button>
      <strong className={styles.karmaCount}>{formatUps}</strong>
      <button className={styles.karmaDown}>
        <svg width='1rem' height='0.5rem' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.0272 8.22702C9.86667 9.38754 7.97351 9.38754 6.81298 8.22702L0.292981 1.70702C-0.097543 1.31649 -0.097543 0.683328 0.292981 0.292804C0.683507 -0.0977202 1.31667 -0.0977202 1.70719 0.292804L8.22719 6.8128C8.60667 7.19228 9.2335 7.19228 9.61298 6.8128L16.133 0.292806C16.5235 -0.0977188 17.1567 -0.0977188 17.5472 0.292806C17.9377 0.68333 17.9377 1.31649 17.5472 1.70702L11.0272 8.22702Z'
            fill='var(--grey75)'
          />
        </svg>
      </button>
    </div>
  );
};
