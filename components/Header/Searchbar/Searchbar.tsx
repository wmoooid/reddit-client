import React from 'react';
import styles from './Searchbar.module.css';

export const Searchbar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <span className={styles.searchIcon}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3ZM1 11.5C1 5.70101 5.70101 1 11.5 1C17.299 1 22 5.70101 22 11.5C22 17.299 17.299 22 11.5 22C5.70101 22 1 17.299 1 11.5Z'
            fill='var(--grey75)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.2929 19.2929C19.6834 18.9024 20.3166 18.9024 20.7071 19.2929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L19.2929 20.7071C18.9024 20.3166 18.9024 19.6834 19.2929 19.2929Z'
            fill='var(--grey75)'
          />
        </svg>
      </span>
      <span className={styles.searchText}>Search</span>
    </div>
  );
};
