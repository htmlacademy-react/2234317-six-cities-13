import OfferGoodsItem from '../goods-item/goods-item';

type OfferGoodsProps = {
  goods: string[];
}

function OfferGoods({goods}: OfferGoodsProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => (
          <OfferGoodsItem key={good} name={good} />
        ))}
      </ul>
    </div>
  );
}

export default OfferGoods;
