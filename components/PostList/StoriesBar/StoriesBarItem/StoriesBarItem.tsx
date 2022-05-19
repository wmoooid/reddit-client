import React from 'react';
import Link from 'next/link';
import useListing from '@/hooks/useListing';
import { ListingsResponseChildrenType } from '@/types/listings';
import { SubscriptionsResponseChildren } from '@/types/subscriptions';
import { StoriesBarContext } from '../StoriesBar';
import styles from './StoriesBarItem.module.css';

interface StoriesBarItemProps {
  item: SubscriptionsResponseChildren;
}

export const StoriesBarItem: React.FC<StoriesBarItemProps> = ({ item }) => {
  const { posts, isLoading } = useListing(item.data.url);
  const { loadingTable, setIsLoadding } = React.useContext(StoriesBarContext);

  const postWithVideo = (post: ListingsResponseChildrenType) => post.data.is_video;
  const hasVideoPosts = posts.filter(postWithVideo).length;

  const isFalse = (item: any) => item === false;

  React.useEffect(() => {
    if (loadingTable && setIsLoadding) {
      loadingTable[item.data.id] = isLoading;
      if (Object.values(loadingTable).every(isFalse)) {
        setIsLoadding(false);
      }
    }
  }, [isLoading]);

  if (hasVideoPosts)
    return (
      <Link href={`/stories${item.data.url}`} shallow={true}>
        <li className={styles.item}>
          <img className={styles.itemImage} src={item.data.community_icon || item.data.icon_img} alt='' />
          <small className={styles.itemName}>{item.data.display_name}</small>
        </li>
      </Link>
    );

  return null;
};
