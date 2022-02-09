import React from 'react';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
  isPostPage?: boolean;
  preview: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ isPostPage = false, preview }) => {
  return (
    <>
      {isPostPage ? (
        <img className={styles.previewPage} src={preview} alt='Post preview' />
      ) : (
        <img className={styles.preview} src={preview} alt='Post preview' />
      )}
    </>
  );
};
