import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Header } from '@/components/Header/Header';
import styles from '@/styles/Index.module.css';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { PostItem } from '@/components/PostList/PostItem/PostItem';
import { CommentsResponseCommentsType, CommentsResponsePostInfoType } from '@/types/comments';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const token = getCookie('token');

  const [postInfo, setPostInfo] = React.useState({} as CommentsResponsePostInfoType);
  // const [comments, setComments] = React.useState({} as CommentsResponseCommentsType);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function load() {
      try {
        const {
          data: [post, comment],
        } = await axios.get(`https:/oauth.reddit.com/comments/${pid}`, {
          headers: { Authorization: `bearer ${token}` },
        });
        const [postInfo] = post.data.children;
        setPostInfo(postInfo);
        // setComments(data[1]);
        // console.log('data', data);
        // console.log('postInfo', postInfo);
        // console.log('comments', comments);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    pid === undefined ? () => {} : load();
  }, [pid]);

  // React.useEffect(() => {
  //   console.log(postInfo);
  // }, [postInfo]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <title>Another Reddit mirror</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <PostItem
              isPostPage={true}
              title={postInfo.data.title}
              subreddit={postInfo.data.subreddit}
              creatorDate={postInfo.data.created}
              preview={postInfo.data.preview.images[0].source.url.replaceAll('amp;', '')}
              karmaCount={postInfo.data.ups}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default PostPage;
