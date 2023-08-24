import {ChangeEvent, FormEvent, useState} from 'react';
import OfferReviewsFormRating from '../reviews-form-rating/reviews-form-rating';
import {MAX_COMMENT_LENGTH, NO_FORM_DATA} from '../../../const';
import {getCurentDate} from '../../../utils/date';

function OfferReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState(NO_FORM_DATA);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmitClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setFormData({...formData,
      id: crypto.randomUUID(),
      date: getCurentDate(),
    });
    /* eslint-disable no-console */
    console.log(formData);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <OfferReviewsFormRating onRatingChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={formData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MAX_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.comment.length < MAX_COMMENT_LENGTH}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
