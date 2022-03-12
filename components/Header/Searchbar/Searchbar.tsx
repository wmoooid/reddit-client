import { Icon_Search } from '@/components/icons/Icon_Search';
import { AvatarPlaceholder } from '@/components/placeholders/Avatar.placeholder';
import useSearch from '@/hooks/useSearch';
import { formatNumber } from '@/utils/formatNumber';
import Link from 'next/link';
import React from 'react';
import styles from './Searchbar.module.css';

export const Searchbar: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }
  function handleSearchbarClick() {
    setIsOpen(true);
  }
  function handleItemClick() {
    setIsOpen(false);
    setQuery('');
  }

  const { list } = useSearch(query);

  return (
    <div className={styles.container}>
      <span className={styles.searchIcon}>
        <Icon_Search />
      </span>
      <input
        type='text'
        value={query}
        onClick={handleSearchbarClick}
        onChange={handleQueryChange}
        className={styles.searchText}
        placeholder='Search'
      />
      {isOpen && query && (
        <div className={styles.popupContainer}>
          <ul className={styles.popupList}>
            {list.map((item) => (
              <Link key={item.name} href={`/r/${item.name}`} shallow={true}>
                <li onClick={handleItemClick} className={styles.popupItem}>
                  <span className={styles.itemImageContainer}>
                    {item.icon_img ? (
                      <img src={item.icon_img} className={styles.itemImage} />
                    ) : (
                      <AvatarPlaceholder color={item.key_color} name={item.name} />
                    )}
                  </span>
                  <span className={styles.itemInfo}>
                    <span className={styles.itemText}>{item.name}</span>
                    <span className={styles.itemSubscribers}>{`${formatNumber(item.subscriber_count)} subscribers`}</span>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
