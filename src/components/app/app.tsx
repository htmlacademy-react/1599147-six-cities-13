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
import { FavoriteGroupType} from '../../types/offer-types';

type AppProps = {
  favoriteList: FavoriteGroupType;
}

export default function App(props: AppProps): JSX.Element {

  const { favoriteList } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index path={AppRoute.Root}
              element={
                <MainPage />
              }
            />
            <Route path={AppRoute.Offer}
              element={
                <OfferPage authStatus={AuthStatus.Auth} />
              }
            />
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute criteria={AuthStatus.Auth} param={AuthStatus.Auth} routeTo={AppRoute.Login}>
                <FavoritesPage favoriteGroupList={favoriteList}/>
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Login}
              element={
                <PrivateRoute criteria={AuthStatus.NoAuth} param={AuthStatus.NoAuth} routeTo={AppRoute.Root}>
                  <LoginPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path={AppRoute.Any} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
