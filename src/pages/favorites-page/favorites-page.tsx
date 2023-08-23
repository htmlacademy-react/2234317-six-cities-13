import MainLayout from '../../layouts/main-layout/main-layout';
import FavoritestList from '../../components/favorites/favorites-list/favorites-list';
import {Offers} from '../../types/offer';

type FavoritesPageProps = {
  offers: Offers;
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <MainLayout pageTitle="6 cities: favorites" withFooter>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritestList offers={offers} />
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default FavoritesPage;
