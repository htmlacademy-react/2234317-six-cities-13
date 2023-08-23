import FavoritesItem from '../favorites-item/favorites-item';
import {Offers} from '../../../types/offer';

type FavoritesListProps = {
  offers: Offers;
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.values(offers).map((offer) => (
        <FavoritesItem key={offer.id} offers={offers} />
      ))}
    </ul>
  );
}

export default FavoritesList;
