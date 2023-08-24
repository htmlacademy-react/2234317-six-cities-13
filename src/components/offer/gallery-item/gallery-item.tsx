type OfferGalleryItemProps = {
  image: string;
}

function OfferGalleryItem({image}: OfferGalleryItemProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Offer photo" />
    </div>
  );
}

export default OfferGalleryItem;
