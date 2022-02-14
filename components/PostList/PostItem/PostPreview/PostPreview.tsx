import React from 'react';
import ReactPlayer from 'react-player';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
  isPostPage?: boolean;
  isVideo?: boolean;
  preview: string;
  video?: string | undefined;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ isPostPage = false, isVideo = false, preview, video }) => {
  const [videoSrc, setVideoSrc] = React.useState<string | undefined>('');
  if (video) {
    React.useEffect(() => {
      setVideoSrc(video);
    }, []);
  }

  if (isPostPage && isVideo) return <ReactPlayer url={videoSrc} width={'100%'} height={'100%'} playing muted loop />;

  if (isPostPage) return <img className={styles.previewPage} src={preview} alt='Post preview' />;

  return <img className={styles.preview} src={preview} alt='Post preview' />;
};
