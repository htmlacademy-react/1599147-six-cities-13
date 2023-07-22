import { CommentType } from '../../types/comment-types';
import { calcRatingWidth, getFormattingDate } from '../../utils/utils';

type ReviewItemProps = {
  commentItem: CommentType;
}

export function ReviewItem(props: ReviewItemProps): JSX.Element {
  const { commentItem } = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={commentItem.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {commentItem.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${calcRatingWidth(commentItem.rating)}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentItem.comment}
        </p>
        <time className="reviews__time" dateTime={commentItem.date}>{getFormattingDate(commentItem.date)}</time>
      </div>
    </li>
  );
}
