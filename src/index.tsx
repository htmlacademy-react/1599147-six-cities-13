import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TOTAL_OFFER_COUNT } from './constants/global-config';
import { FavoriteGroupType, OfferList } from './types/offer-types';
import { getMockOfferList, getMockFavorites } from './mocks/mock-model';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerList: OfferList = getMockOfferList();
const favoriteList: FavoriteGroupType = getMockFavorites();


root.render(
  <React.StrictMode>
    <App offerByCityCount={TOTAL_OFFER_COUNT} offerList={offerList} favoriteList={favoriteList} />
  </React.StrictMode>
);
