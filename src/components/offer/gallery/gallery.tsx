import OfferGalleryItem from '../gallery-item/gallery-item';
import {MAX_OFFER_IMG_COUNT} from '../../../const';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({images}: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, MAX_OFFER_IMG_COUNT).map((image) => (
          <OfferGalleryItem key={image} image={image} />
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
