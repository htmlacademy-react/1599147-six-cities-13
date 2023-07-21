import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from '../private-route/private-route';

import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

import { AppRoute } from '../../constants/app-routes';
import { AuthStatus } from '../../constants/auth-status';
import { FavoriteGroup, OfferList } from '../../types/offer-types';

type AppProps = {
  offerByCityCount: number;
  offerList: OfferList;
  favoriteList: FavoriteGroup;
}

export default function App(props: AppProps): JSX.Element {

  const { offerByCityCount, offerList, favoriteList } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index path={AppRoute.Root} element={<MainPage offerCount={offerByCityCount} offersList={offerList} />} />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <FavoritesPage favoriteGroupList={favoriteList}/>
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
