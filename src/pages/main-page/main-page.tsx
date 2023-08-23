import MainLayout from '../../layouts/main-layout/main-layout';
import LocationList from '../../components/main/location-list/location-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Sort from '../../components/main/sort/sort';
import {Offers} from '../../types/offer';

type MainPageProps = {
  offers: Offers;
}

function MainPage({offers}: MainPageProps): JSX.Element {
  return (
    <MainLayout className="page--gray page--main" pageTitle="6 cities">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList offers={offers} classNamePrefix="cities" type="cities" />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default MainPage;
