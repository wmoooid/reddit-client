import axios from 'axios';
import { getCookie } from 'cookies-next';
import React from 'react';
import { PostItem } from './PostItem/PostItem';
import styles from './PostList.module.css';

export const PostList: React.FC = () => {
  const token = getCookie('token');

  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function load() {
      try {
        const {
          data: {
            data: { children },
          },
        } = await axios.get('https:/oauth.reddit.com/hot', {
          headers: { Authorization: `bearer ${token}` },
        });
        setPosts(children);
      } catch (error) {
        console.log(error);
      }
    }

    load();
  }, []);

  return (
    <>
      <h2 className={styles.heading}>Hot</h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <>
            <PostItem
              key={post.data.id}
              title={post.data.title}
              subreddit={post.data.subreddit_name_prefixed}
              creatorDate={post.data.created}
              preview={post.data.thumbnail}
              karmaCount={post.data.ups}
            />
            <span className={styles.divider}></span>
          </>
        ))}
      </ul>
    </>
  );
};
