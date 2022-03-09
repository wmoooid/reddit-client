import { AvatarPlaceholder } from '@/components/placeholders/Avatar.placeholder';
import { CommentsResponseCommentsDataType } from '@/types/comments';
import { formatDate } from '@/utils/formatDate';
import styles from './CommentsItem.module.css';

interface CommentsItemProps {
  comment: CommentsResponseCommentsDataType;
}

export const CommentsItem: React.FC<CommentsItemProps> = ({ children, comment }) => {
  return (
    <li key={comment.data.id} className={styles.item}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <AvatarPlaceholder name={comment.data.author} />
        </div>
        <strong className={styles.author}>{comment.data.author}</strong>
        <small className={styles.created}>{formatDate(comment.data.created)}</small>
      </div>
      <p className={styles.body}>{comment.data.body}</p>
      <div className={styles.replies}>
        {comment.data.replies?.data?.children.slice(0, -1).map((comment) => (
          <CommentsItem key={comment.data.id} comment={comment} />
        ))}
      </div>
    </li>
  );
};
