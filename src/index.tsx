import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TOTAL_OFFER_COUNT } from './constants/global-config';
import { OfferList } from './types/offer-types';
import { getMockOfferList } from './mocks/mock-model';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerList: OfferList = getMockOfferList();

root.render(
  <React.StrictMode>
    <App offerByCityCount={TOTAL_OFFER_COUNT} offerList={offerList} />
  </React.StrictMode>
);
