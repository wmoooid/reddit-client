import useStoriesList from '@/hooks/useStoriesList';
import useSubscriptions from '@/hooks/useSubscriptions';
import Link from 'next/link';
import React from 'react';
import styles from './StoriesBar.module.css';

export const StoriesBar: React.FC = () => {
  const { data } = useStoriesList();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((item) => (
          <Link key={item.data.id} href={`/stories${item.data.url}`} shallow={true}>
            <li className={styles.item}>
              <img className={styles.itemImage} src={item.data.community_icon || item.data.icon_img} alt='' />
              <small className={styles.itemName}>{item.data.display_name}</small>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
