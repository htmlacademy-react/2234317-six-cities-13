import FavoritesItem from '../favorites-item/favorites-item';
import {Offers} from '../../../types/offer';

type FavoritesListProps = {
  offers: Offers;
  onCardListItemActive: (offerId: string) => void;
}

function FavoritesList({offers, onCardListItemActive}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.values(offers).map((offer) => (
        <FavoritesItem
          key={offer.id}
          offers={offers}
          onCardListItemActive={onCardListItemActive}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
