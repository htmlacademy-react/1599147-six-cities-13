import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TOTAL_OFFER_COUNT } from './constants/global-config';
import { FavoriteGroupType, OfferDetailsType, OfferListType } from './types/offer-types';
import { getMockOfferList, getMockFavorites, getMockOfferDetails, getMockCommentsList } from './mocks/mock-model';
import { CommentsListType } from './types/comment-types';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerList: OfferListType = getMockOfferList();
const favoriteList: FavoriteGroupType = getMockFavorites();
const offerDetails: OfferDetailsType = getMockOfferDetails();
const commentsList: CommentsListType = getMockCommentsList();


root.render(
  <React.StrictMode>
    <App
      offerByCityCount={TOTAL_OFFER_COUNT}
      offerList={offerList}
      favoriteList={favoriteList}
      offerDetails={offerDetails}
      commentsList={commentsList}
    />
  </React.StrictMode>
);
