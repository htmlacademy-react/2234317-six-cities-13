import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="cities__status-wrapper">
              <b className="favorites__status">Page not found</b>
              <Link to="/" className="favorites__status-description">Вернуться на главную</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
