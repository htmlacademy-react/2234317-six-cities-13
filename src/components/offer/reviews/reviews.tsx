import OfferReviewsItem from '../reviews-item/reviews-item';
import {Comments} from '../../../types/comment';

type OfferReviewsProps = {
  reviews: Comments;
}

function OfferReviews({reviews}: OfferReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <OfferReviewsItem
          key={review.id}
          userName={review.user.name}
          userImgUrl={review.user.avatarUrl}
          rating={review.rating}
          content={review.comment}
          date={review.date}
        />
      ))}
    </ul>
  );
}

export default OfferReviews;
