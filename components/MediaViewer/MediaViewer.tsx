import React from 'react';
import ReactPlayer from 'react-player';
import styles from './MediaViewer.module.css';
import { usePostContext } from '@/hooks/usePostContext';
import { Waypoint } from 'react-waypoint';

interface MediaViewerProps {
  type: 'preview' | 'full' | 'stories';
}

export const MediaViewer: React.FC<MediaViewerProps> = ({ type = 'preview' }) => {
  const { is_video, preview, media } = usePostContext();
  const [imageSrc] = preview?.images || [];
  const ref = React.useRef<ReactPlayer>(null);
  function handleEnterViewport() {}
  function handleLeaveViewport() {
    ref.current ? ref.current.showPreview() : () => {};
  }

  const [showOverlay, setShowOverlay] = React.useState(true);
  function handleEnterStories() {
    setShowOverlay(false);
  }
  function handleLeaveStories() {
    setShowOverlay(true);
  }

  if (type === 'stories') {
    return (
      <Waypoint onEnter={handleEnterStories} onLeave={handleLeaveStories}>
        <div className={styles.wrapperStories}>
          <div className={styles.blurBackground} style={{ backgroundImage: `url(${imageSrc?.resolutions[0].url})` }}></div>
          <img className={styles.previewStories} src={imageSrc?.source.url} alt='Post preview' />
          <ReactPlayer
            ref={ref}
            className={styles.videoWrapper}
            light={showOverlay}
            url={media?.reddit_video.hls_url}
            width={'100%'}
            height={'100%'}
            volume={0.2}
            playing
            loop
          />
        </div>
      </Waypoint>
    );
  }

  if (type === 'full' && is_video)
    return (
      <Waypoint onEnter={handleEnterViewport} onLeave={handleLeaveViewport}>
        <div className={styles.wrapper}>
          <div className={styles.blurBackground} style={{ backgroundImage: `url(${imageSrc?.resolutions[0].url})` }}></div>
          <img className={styles.previewPage} src={imageSrc?.source.url} alt='Post preview' />
          <ReactPlayer
            ref={ref}
            className={styles.videoWrapper}
            light={true}
            url={media?.reddit_video.hls_url}
            width={'100%'}
            height={'100%'}
            volume={0.2}
            playing
            controls
            loop
          />
        </div>
      </Waypoint>
    );

  if (type === 'full')
    return (
      <div className={styles.wrapper}>
        <div className={styles.blurBackground} style={{ backgroundImage: `url(${imageSrc?.resolutions[0]?.url})` }}></div>
        <img
          className={styles.previewPage}
          src={imageSrc.variants.gif ? imageSrc.variants.gif.source.url : imageSrc?.source.url}
          alt='Post preview'
        />
      </div>
    );

  if (type === 'preview')
    return (
      <img
        className={styles.preview}
        src={imageSrc?.resolutions[1]?.url || imageSrc?.resolutions[0]?.url}
        alt='Post preview'
      />
    );

  return null;
};
