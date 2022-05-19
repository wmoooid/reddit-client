import { Icon_Best_Stories } from '@/components/icons/Icon_Best_Stories';
import { StoriesBarPlaceholder } from '@/components/placeholders/StoriesBar.placeholder';
import useSubscriptions from '@/hooks/useSubscriptions';
import Link from 'next/link';

import React from 'react';
import styles from './StoriesBar.module.css';
import { StoriesBarItem } from './StoriesBarItem/StoriesBarItem';

interface StoriesBarContextProps {
  loadingTable?: LoadingTable;
  setIsLoadding?: React.Dispatch<React.SetStateAction<boolean>>;
}

type LoadingList = Array<boolean>;

interface LoadingTable {
  [n: string]: boolean;
}

export const StoriesBarContext = React.createContext<StoriesBarContextProps>({});

export const StoriesBar: React.FC = () => {
  const { subscriptions } = useSubscriptions();
  const [isLoading, setIsLoadding] = React.useState(true);
  const loadingTable = {};

  return (
    <div className={styles.container}>
      <StoriesBarContext.Provider value={{ loadingTable, setIsLoadding }}>
        <ul className={styles.list}>
          <Link href={`/stories/best`} shallow={true}>
            <li className={styles.item}>
              <Icon_Best_Stories />
              <small className={styles.itemName}>Best</small>
            </li>
          </Link>
          {subscriptions.map((item) => (
            <StoriesBarItem key={item.data.id} item={item} />
          ))}
        </ul>
      </StoriesBarContext.Provider>
      {isLoading && (
        <div className={styles.placeholder}>
          <StoriesBarPlaceholder />
        </div>
      )}
    </div>
  );
};
