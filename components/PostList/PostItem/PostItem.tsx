import React from 'react';
import styles from './PostItem.module.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { PostDetails } from './PostDetails/PostDetails';
import { PostPreview } from './PostPreview/PostPreview';
import { MenuButton } from './MenuButton/MenuButton';

interface PostItemProps {
  isPostPage?: boolean;
  isVideo?: boolean;
  title: string;
  subreddit: string;
  creatorDate: number;
  preview: string;
  video?: string | undefined;
  karmaCount: number;
  href?: string;
}

export const PostItem: React.FC<PostItemProps> = ({
  isPostPage = false,
  isVideo = false,
  video = undefined,
  title,
  subreddit,
  creatorDate,
  preview,
  karmaCount,
  href,
}) => {
  return (
    <>
      {isPostPage ? (
        <section className={styles.boxPage}>
          <div className={styles.topSide}>
            <KarmaCounter karmaCount={karmaCount} />
            <span className={styles.dividerPage}></span>
            <PostDetails isPostPage={isPostPage} title={title} subreddit={subreddit} creatorDate={creatorDate} href={href} />
          </div>
          <PostPreview isPostPage={isPostPage} isVideo={isVideo} preview={preview} video={video} />
        </section>
      ) : (
        <li className={styles.box}>
          <div className={styles.leftSide}>
            <KarmaCounter karmaCount={karmaCount} />
            <span className={styles.divider}></span>
            <PostDetails title={title} subreddit={subreddit} creatorDate={creatorDate} href={href} />
          </div>
          <div className={styles.rightSide}>
            <PostPreview preview={preview} />
            <span className={styles.space}></span>
            <MenuButton />
          </div>
        </li>
      )}
    </>
  );
};
