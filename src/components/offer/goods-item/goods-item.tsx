type OfferGoodsItemProps = {
  name: string;
}

function OfferGoodsItem({name}: OfferGoodsItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {name}
    </li>
  );
}

export default OfferGoodsItem;
