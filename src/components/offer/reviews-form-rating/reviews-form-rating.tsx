import {ChangeEvent} from 'react';
import OfferReviewsFormRatingItem from '../reviews-form-rating-item/reviews-form-rating-item';

type RatingTitles = {
  [key: number]: string;
}

const titles: RatingTitles = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

type OfferReviewsFormRatingProps = {
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function OfferReviewsFormRating({ onRatingChange }: OfferReviewsFormRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.keys(titles).map((index) => (
        <OfferReviewsFormRatingItem
          key={index}
          ratingNumber={index}
          title={titles[Number(index)]}
          onRatingItemChange={onRatingChange}
        />
      ))}
    </div>
  );
}

export default OfferReviewsFormRating;
