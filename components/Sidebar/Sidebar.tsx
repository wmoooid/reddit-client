import Link from 'next/link';
import React from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <strong className={styles.heading}>Global listings</strong>
        <ul className={styles.list}>
          <Link href={`/best`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 17.5V19.88C12 21.75 11.25 22.5 9.37 22.5H4.62C2.75 22.5 2 21.75 2 19.88V15.13C2 13.25 2.75 12.5 4.62 12.5H7V14.87C7 16.75 7.75 17.5 9.62 17.5H12Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17 12.5V14.87C17 16.75 16.25 17.5 14.37 17.5H9.62C7.75 17.5 7 16.75 7 14.87V10.12C7 8.25 7.75 7.5 9.62 7.5H12V9.87C12 11.75 12.75 12.5 14.62 12.5H17Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M22 5.12V9.87C22 11.75 21.25 12.5 19.37 12.5H14.62C12.75 12.5 12 11.75 12 9.87V5.12C12 3.25 12.75 2.5 14.62 2.5H19.37C21.25 2.5 22 3.25 22 5.12Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>All</span>
            </li>
          </Link>
          <Link href={`/hot`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M2 15.79V6.21002C2 4.88002 2.77 4.56002 3.71 5.50002L6.3 8.09002C6.69 8.48002 7.33 8.48002 7.71 8.09002L11.29 4.50002C11.68 4.11002 12.32 4.11002 12.7 4.50002L16.29 8.09002C16.68 8.48002 17.32 8.48002 17.7 8.09002L20.29 5.50002C21.23 4.56002 22 4.88002 22 6.21002V15.8C22 18.8 20 20.8 17 20.8H7C4.24 20.79 2 18.55 2 15.79Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>Hot</span>
            </li>
          </Link>
          <Link href={`/new`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.59 12.76C18.4232 12.76 20.72 10.4632 20.72 7.63C20.72 4.79678 18.4232 2.5 15.59 2.5C12.7567 2.5 10.46 4.79678 10.46 7.63C10.46 10.4632 12.7567 12.76 15.59 12.76Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M6.35977 19.94C8.06081 19.94 9.43979 18.5611 9.43979 16.86C9.43979 15.159 8.06081 13.78 6.35977 13.78C4.65873 13.78 3.27979 15.159 3.27979 16.86C3.27979 18.5611 4.65873 19.94 6.35977 19.94Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                  />
                  <path
                    d='M16.6201 22.4999C18.0339 22.4999 19.1801 21.3537 19.1801 19.9399C19.1801 18.526 18.0339 17.3799 16.6201 17.3799C15.2062 17.3799 14.0601 18.526 14.0601 19.9399C14.0601 21.3537 15.2062 22.4999 16.6201 22.4999Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>New</span>
            </li>
          </Link>
          <Link href={`/controversial`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20.0101 19.0101L15.0601 14.0601'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.0602 14.06L11.5202 17.6C10.7402 18.38 9.47024 18.38 8.69024 17.6L4.45023 13.36C3.67023 12.58 3.67023 11.31 4.45023 10.53L11.5202 3.46C12.3002 2.68 13.5702 2.68 14.3502 3.46L18.5902 7.70002C19.3702 8.48002 19.3702 9.75001 18.5902 10.53L15.0602 14.06Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 21.5H8'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6.56006 8.41992L13.6301 15.4899'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>Controversial</span>
            </li>
          </Link>
          <Link href={`/rising`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.39 5.71L16.7999 8.52999C16.9899 8.91999 17.4999 9.28999 17.9299 9.36999L20.48 9.78999C22.11 10.06 22.49 11.24 21.32 12.42L19.3299 14.41C18.9999 14.74 18.81 15.39 18.92 15.86L19.4899 18.32C19.9399 20.26 18.9 21.02 17.19 20L14.7999 18.58C14.3699 18.32 13.65 18.32 13.22 18.58L10.8299 20C9.11994 21.01 8.07995 20.26 8.52995 18.32L9.09996 15.86C9.20996 15.4 9.01995 14.75 8.68995 14.41L6.69996 12.42C5.52996 11.25 5.90996 10.07 7.53996 9.78999L10.0899 9.36999C10.5199 9.29999 11.03 8.91999 11.22 8.52999L12.63 5.71C13.38 4.18 14.62 4.18 15.39 5.71Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path d='M8 5.5H2' stroke='var(--grey75)' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                  <path
                    d='M5 19.5H2'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 12.5H2'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>Rising</span>
            </li>
          </Link>
          <Link href={`/top`} shallow={true}>
            <li className={styles.item}>
              <span className={styles.itemIcon}>
                <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.67 14.5H4C2.9 14.5 2 15.4 2 16.5V22.5H8.67V14.5Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13.3302 10.5H10.6602C9.56016 10.5 8.66016 11.4 8.66016 12.5V22.5H15.3302V12.5C15.3302 11.4 14.4402 10.5 13.3302 10.5Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20.0001 17.5H15.3301V22.5H22.0001V19.5C22.0001 18.4 21.1001 17.5 20.0001 17.5Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12.5202 2.57007L13.0502 3.63006C13.1202 3.78006 13.3102 3.92006 13.4702 3.94006L14.4302 4.10007C15.0402 4.20007 15.1902 4.65005 14.7502 5.08005L14.0002 5.83005C13.8702 5.96005 13.8002 6.20006 13.8402 6.37006L14.0502 7.29007C14.2202 8.02007 13.8302 8.30007 13.1902 7.92007L12.2902 7.39007C12.1302 7.29007 11.8602 7.29007 11.7002 7.39007L10.8002 7.92007C10.1602 8.30007 9.77023 8.02007 9.94023 7.29007L10.1502 6.37006C10.1902 6.20006 10.1202 5.95005 9.99023 5.83005L9.25023 5.09006C8.81023 4.65006 8.95023 4.21005 9.57023 4.11005L10.5302 3.95007C10.6902 3.92007 10.8802 3.78007 10.9502 3.64007L11.4802 2.58005C11.7702 2.00005 12.2302 2.00007 12.5202 2.57007Z'
                    stroke='var(--grey75)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className={styles.itemName}>Top</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
