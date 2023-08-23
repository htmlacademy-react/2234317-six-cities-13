import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {PlaceCardType} from '../../types/place-card';

type PlaceCardListProps = {
  offers: Offers;
  type: PlaceCardType;
}

function PlaceCardList({offers, type}: PlaceCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} type={type} />
      ))}
    </>
  );
}

export default PlaceCardList;
