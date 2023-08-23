import {Link} from 'react-router-dom';
import MainLayout from '../../layouts/main-layout/main-layout';

function NotFoundPage(): JSX.Element {
  return (
    <MainLayout className="page--gray page--main" pageTitle="6 cities: not found">
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Not found</h1>
            <div className="cities__status-wrapper">
              <b className="favorites__status">Page not found</b>
              <Link to="/" className="favorites__status-description">Вернуться на главную</Link>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default NotFoundPage;
