import {Link} from 'react-router-dom';
import PlaceCardList from '../../../components/place-card-list/place-card-list';
import {Offers} from '../../../types/offer';

type FavoritesItemProps = {
  offers: Offers;
  onCardListItemActive: (offerId: string) => void;
}

function FavoritesItem({offers, onCardListItemActive}: FavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to="#" className="locations__item-link">
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardList
          offers={offers}
          type="favorites"
          onCardListItemActive={onCardListItemActive}
        />
      </div>
    </li>
  );
}

export default FavoritesItem;
