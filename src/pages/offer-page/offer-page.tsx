import {useParams} from 'react-router-dom';
import classNames from 'classnames';
import {getRatingInPercents} from '../../utils/common';
import MainLayout from '../../layouts/main-layout/main-layout';
import OfferGallery from '../../components/offer/gallery/gallery';
import OfferFeatures from '../../components/offer/features/features';
import OfferGoods from '../../components/offer/goods/goods';
import OfferHost from '../../components/offer/host/host';
import OfferReviews from '../../components/offer/reviews/reviews';
import OfferReviewsForm from '../../components/offer/reviews-form/reviews-form';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import {Offers} from '../../types/offer';
import {Comments} from '../../types/comment';

type OfferPageProps = {
  offers: Offers;
  reviews: Comments;
}

function OfferPage({offers, reviews}: OfferPageProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  if (!offer) {
    return <div></div>;
    //navigate(AppRoute.NotFound);
  }

  return (
    <MainLayout pageTitle="6 cities: offer">
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={offer.images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={classNames('offer__bookmark-button', 'button', offer.isFavorite && 'offer__bookmark-button--active')} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingInPercents(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <OfferFeatures
                type={offer.type}
                bedroomsCount={offer.bedrooms}
                maxAdultsCount={offer.maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={offer.goods} />
              <OfferHost
                name={offer.host.name}
                avatarUrl={offer.host.avatarUrl}
                isPro={offer.host.isPro}
                description={offer.description}
              />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <OfferReviews reviews={reviews} />
                <OfferReviewsForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList offers={offers} classNamePrefix="near-places" type="nearPlaces" />
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default OfferPage;
