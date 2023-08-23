type OfferFeaturesProps = {
  type: string;
  bedroomsCount: number;
  maxAdultsCount: number;
}

function OfferFeatures({type, bedroomsCount, maxAdultsCount}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedroomsCount} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdultsCount} adults
      </li>
    </ul>
  );
}

export default OfferFeatures;
