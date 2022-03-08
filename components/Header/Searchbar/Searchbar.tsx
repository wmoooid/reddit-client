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
        <svg width='1.25rem' height='1.25rem' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
              <Link href={`/r/${item.name}`} shallow={true}>
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
