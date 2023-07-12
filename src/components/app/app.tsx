import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages//login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppProps = {
  errorsCount: number;
}

function App({errorsCount}: AppProps): JSX.Element {
  return (
    // <FavoritesPage errorsCount={errorsCount} />
    // <LoginPage errorsCount={errorsCount} />
    // <MainPage errorsCount={errorsCount} />
    <OfferPage errorsCount={errorsCount} />
  );
}

export default App;
