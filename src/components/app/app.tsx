import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CitiesList } from '../../types/cities-types';

import PrivateRoute from '../private-route/private-route';

import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

import { AppRoute } from '../../constants/app-routes';
import { AuthStatus } from '../../constants/auth-status';

type AppProps = {
  pageCardCount: number;
  offerByCityCount: number;
  cityList: CitiesList;
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
          <Route path={AppRoute.Any} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
