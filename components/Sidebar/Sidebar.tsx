import React from 'react';
import styles from './Sidebar.module.css';
import { GlobalListings } from './GlobalListings/GlobalListings';
import { SubscriptionsList } from './SubscriptionsList/SubscriptionsList';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <GlobalListings />
      <SubscriptionsList />
    </div>
  );
};
