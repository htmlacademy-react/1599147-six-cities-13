import { OfferDetails, OfferList, FavoriteGroupType, Offer } from '../types/offer-types';
import { CommentsList } from '../types/comment-types';
import mockOfferList from './offer-list.json';
import mockOfferDetails from './offer-details.json';
import mockCommentsList from './comments.json';
import mockFavorites from './favorites-list.json';

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

export const getMockFavorites = ():FavoriteGroupType => {
  const favoritesListClone = structuredClone(mockFavorites);

  const favoritesGroupList: {[key: string]: Offer[]} = {};

  favoritesListClone.forEach((item) => {
    if (!(item.city.name in favoritesGroupList)) {
      favoritesGroupList[item.city.name] = [];
    }
    favoritesGroupList[item.city.name].push(item);
    return favoritesGroupList;
  });

  return Object.entries(favoritesGroupList);
};

