import styles from './Header.module.css';
import React from 'react';
import { SidebarButton } from './SidebarButton/SidebarButton';
import { Searchbar } from './Searchbar/Searchbar';
import { Userbar } from './Userbar/Userbar';

export const Header: React.FC = () => {
  return (
    <header className={styles.box}>
      <div className={styles.leftSide}>
        <SidebarButton />
        <span className={styles.divider}></span>
        <Searchbar />
      </div>
      <div className={styles.rightSide}>
        <span className={styles.allertsIcon}></span>
        <Userbar />
      </div>
    </header>
  );
};
