import React from 'react';
import styles from './PostList.module.css';
import useInfiniteListing from '@/hooks/useInfiniteListing';
import { PostItem } from './PostItem/PostItem';
import { PostListPlaceholder } from '../placeholders/PostList.placeholder';
import { PostProvider } from '@/hooks/usePostContext';
import { TopBar } from './TopBar/TopBar';
import { StoriesBar } from './StoriesBar/StoriesBar';

interface PostListProps {
  listing: string;
}

interface PostListContextProps {
  listing: string;
  isTile: boolean;
  setIsTile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostListContext = React.createContext({} as PostListContextProps);

export const PostList: React.FC<PostListProps> = ({ listing }) => {
  const { posts, isLoading, isValidating, isError, size, setSize } = useInfiniteListing(listing);

  const [isTile, setIsTile] = React.useState(true);

  const isSubreddit = listing.startsWith('/r/');

  if (isLoading) {
    return <PostListPlaceholder />;
  }

  if (isError) {
    return <PostListPlaceholder />;
  }

  if (posts) {
    return (
      <PostListContext.Provider value={{ listing, isTile, setIsTile }}>
        {!isSubreddit && <StoriesBar />}
        <TopBar />
        <ul className={styles.list}>
          {posts.map((post) => (
            <PostProvider key={`${post.data.id}_provider`} value={post.data}>
              <PostItem key={post.data.id} type={isTile ? 'tile' : 'small'} />
              <span className={styles.divider}></span>
            </PostProvider>
          ))}
        </ul>
        {isValidating ? (
          <div className='placeholder'>
            <div className={styles.moreLoading}>Loading...</div>
          </div>
        ) : (
          <button className={styles.moreButton} onClick={() => setSize(size + 1)}>
            Load More
          </button>
        )}
      </PostListContext.Provider>
    );
  }

  return <PostListPlaceholder />;
};
