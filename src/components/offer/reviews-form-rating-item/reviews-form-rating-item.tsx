import {ChangeEvent} from 'react';

type OfferReviewsFormRatingItemProps = {
  ratingNumber: string;
  title: string;
  onRatingItemChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function OfferReviewsFormRatingItem({ratingNumber, title, onRatingItemChange}: OfferReviewsFormRatingItemProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingNumber}
        id={`${ratingNumber}-stars`}
        type="radio"
        onChange={onRatingItemChange}
      />
      <label htmlFor={`${ratingNumber}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default OfferReviewsFormRatingItem;
