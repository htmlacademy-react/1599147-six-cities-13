import { CommentsListType } from '../../types/comment-types';
import { ReviewItem } from '../review-item/review-item';

type ReviewListProps = {
  commentsList: CommentsListType;
}

export default function ReviewList(props: ReviewListProps): JSX.Element {
  const { commentsList } = props;
  return (
    <ul className="reviews__list">
      {commentsList.map((item)=> (<ReviewItem commentItem={item} key={item.id}/>))}
    </ul>
  );
}
