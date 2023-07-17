import { AppRoute } from '../../constants/app-routes';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { CitiesListType } from '../../types/cities-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { AuthStatus } from '../../constants/auth-status';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  pageCardCount: number;
  offerByCityCount: number;
  cityList: CitiesListType;
}

export default function App(props: AppProps): JSX.Element {

  const { pageCardCount, offerByCityCount, cityList } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index path={AppRoute.Root} element={<MainPage placesCount={pageCardCount} offerCount={offerByCityCount} cityList={cityList} />} />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authStatus={AuthStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Login} element={<LoginPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
