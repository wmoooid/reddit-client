import { CommentsResponseCommentsDataType } from '@/types/comments';
import { formatDate } from '@/utils/formatDate';
import { UserAvatar } from './UserAvatar/UserAvatar';
import styles from './CommentsItem.module.css';
import React from 'react';
import { CommentBar } from './CommentBar/CommentBar';

interface CommentsItemProps {
  comment: CommentsResponseCommentsDataType;
}

export const CommentsItem: React.FC<CommentsItemProps> = ({ comment }) => {
  const [highlight, setHighlight] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <li
      // onMouseEnter={() => {
      //   setHighlight(true);
      // }}
      // onMouseLeave={() => {
      //   setHighlight(false);
      // }}
      key={comment.data.id}
      className={styles.item}>
      <div className={styles.leftSide}>
        <div className={styles.avatar}>
          <UserAvatar userId={comment.data.author} />
        </div>
        {comment.data.replies ? (
          <span
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className={styles.hideButton}>
            {isVisible ? '–' : '+'}
          </span>
        ) : null}
        <div className={highlight ? styles.line_hl : styles.line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.rightSide}>
          <div className={styles.info}>
            <strong className={styles.author}>{comment.data.author}</strong>
            <small className={styles.created}>{formatDate(comment.data.created)}</small>
            <CommentBar ups={comment.data.ups} />
          </div>
          {isVisible ? (
            <p className={styles.body} dangerouslySetInnerHTML={{ __html: comment.data.body_html }}></p>
          ) : (
            <p
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              className={styles.showBranch}>
              Show branch
            </p>
          )}
        </div>
        {isVisible
          ? comment.data.replies?.data?.children.slice(0, -1).map((comment) => (
              <ul key={comment.data.id} className={styles.replies}>
                <CommentsItem comment={comment} />
              </ul>
            ))
          : null}
      </div>
    </li>
  );
};
