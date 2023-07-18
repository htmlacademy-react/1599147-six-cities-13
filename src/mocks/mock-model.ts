import { OfferDetails, OfferList } from '../types/offer-types';
import { CommentsList } from '../types/comment-types';
import mockOfferList from './offer-list.json';
import mockOfferDetails from './offer-details.json';
import mockCommentsList from './comments.json';

export const getMockOfferList = (): OfferList => {
  const offerListClone: OfferList = structuredClone(mockOfferList);
  return offerListClone.filter((item) => item.city.name === 'Paris').slice(0, 4);
};

export const getMockOfferDetails = (): OfferDetails => {
  const offerDetailsClone: OfferDetails = structuredClone(mockOfferDetails);
  return offerDetailsClone;
};

export const getMockCommentsList = (): CommentsList => {
  const commentsListClone: CommentsList = structuredClone(mockCommentsList);
  return commentsListClone;
};

