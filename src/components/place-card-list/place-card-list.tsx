import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type PlaceCardListProps = {
  offers: Offers;
  classNamePrefix: string;
  type: 'favorites' | 'nearPlaces' | 'cities';
}

function PlaceCardList({offers, classNamePrefix, type}: PlaceCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          classNamePrefix={classNamePrefix}
          type={type}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
