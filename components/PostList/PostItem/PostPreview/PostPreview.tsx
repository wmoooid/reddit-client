import React from 'react';
import Image from 'next/image';
import styles from './PostPreview.module.css';
import nsfw from '@/public/nsfw.png';

interface PostPreviewProps {
  preview: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ preview }) => {
  return (
    <div className={styles.preview}>
      {preview == 'nsfw' ? (
        <Image src={nsfw} alt='nsfw image' layout='fill' objectFit='cover' />
      ) : (
        <Image src={preview} alt='Post preview' layout='fill' objectFit='cover' />
      )}
    </div>
  );
};
