import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {getRatingInPercents} from '../../utils/common';
import {Offer} from '../../types/offer';
import {PlaceCardType} from '../../types/place-card';

type PlaceCardProps = {
  offer: Offer;
  type: PlaceCardType;
}

const placeCardProperties = {
  cities: {
    img: {
      width: 260,
      height: 200
    },
    classNamePrefix: 'cities'
  },
  nearPlaces: {
    img: {
      width: 260,
      height: 200
    },
    classNamePrefix: 'near-places'
  },
  favorites: {
    img: {
      width: 150,
      height: 110
    },
    classNamePrefix: 'favorites'
  }
};

function PlaceCard({offer, type}: PlaceCardProps): JSX.Element {
  const properties = placeCardProperties[type];
  return (
    <article className={classNames('place-card', `${properties.classNamePrefix}__card`)}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={classNames('place-card__image-wrapper', `${properties.classNamePrefix}__image-wrapper`)}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.images[0]} width={properties.img.width} height={properties.img.height} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button', 'button', offer.isFavorite && 'place-card__bookmark-button--active')} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercents(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
