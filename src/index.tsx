import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cityList } from './constants/cities-list';
import { PAGE_CARD_COUNT, TOTAL_OFFER_COUNT } from './constants/global-config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App pageCardCount={PAGE_CARD_COUNT} offerByCityCount={TOTAL_OFFER_COUNT} cityList={cityList}/>
  </React.StrictMode>
);
