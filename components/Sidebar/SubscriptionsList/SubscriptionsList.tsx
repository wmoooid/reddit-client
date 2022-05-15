import { LayoutContext } from '@/components/Layout';
import useSubscriptions from '@/hooks/useSubscriptions';
import Link from 'next/link';
import React from 'react';
import styles from '../Sidebar.module.css';

export const SubscriptionsList: React.FC = () => {
  const { subscriptions } = useSubscriptions();
  const { setShowSidebar } = React.useContext(LayoutContext);

  return (
    <nav className={styles.nav}>
      <strong className={styles.heading}>Subscriptions</strong>
      <ul className={styles.list}>
        {subscriptions.map((item) => (
          <Link key={item.data.id} href={item.data.url} shallow={true}>
            <li
              onClick={() => {
                setShowSidebar(false);
              }}
              className={styles.item}>
              <img src={item.data.community_icon || item.data.icon_img} className={styles.itemIcon} />
              <span className={styles.itemName}>{item.data.display_name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
