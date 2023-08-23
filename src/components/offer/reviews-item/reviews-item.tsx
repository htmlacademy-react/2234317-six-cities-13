import OfferReviewsItemUser from '../reviews-item-user/reviews-item-user';
import {getRatingInPercents} from '../../../utils/common';
import {getSimpleDate, getHumanizeDate} from '../../../utils/date';

type OfferReviewsItemProps = {
  userName: string;
  userImgUrl: string;
  rating: number;
  content: string;
  date: string;
}

function OfferReviewsItem({userName, userImgUrl, rating, content, date}: OfferReviewsItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <OfferReviewsItemUser name={userName} avatarUrl={userImgUrl} />
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercents(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {content}
        </p>
        <time className="reviews__time" dateTime={getSimpleDate(date)}>{getHumanizeDate(date)}</time>
      </div>
    </li>
  );
}

export default OfferReviewsItem;
