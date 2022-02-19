import React from 'react';
import ReactPlayer from 'react-player';
import styles from './PostPreview.module.css';
import { usePostContext } from '@/hooks/usePostContext';

interface PostPreviewProps {
  isPostPage?: boolean;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ isPostPage = false }) => {
  const { is_video, preview, media } = usePostContext();

  const [imageSrc] = preview.images;

  const [videoSrc, setVideoSrc] = React.useState<string | undefined>('');

  React.useEffect(() => {
    is_video ? setVideoSrc(media?.reddit_video.hls_url) : () => {};
  }, []);

  if (isPostPage && is_video) return <ReactPlayer url={videoSrc} width={'100%'} height={'100%'} playing muted loop />;

  if (isPostPage) return <img className={styles.previewPage} src={imageSrc.source.url} alt='Post preview' />;

  if (preview) return <img className={styles.preview} src={imageSrc.source.url} alt='Post preview' />;

  return <div></div>;
};
