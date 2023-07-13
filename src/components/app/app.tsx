// import FavoritesPage from '../../pages/favorites-page/favorites-page';
// import LoginPage from '../../pages//login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
// import OfferPage from '../../pages/offer-page/offer-page';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    // <FavoritesPage />
    // <LoginPage />
    <MainPage offersCount={offersCount} />
    // <OfferPage />
  );
}

export default App;
