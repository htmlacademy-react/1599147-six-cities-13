import { OfferDetailsType, OfferListType, FavoriteGroupType, OfferType } from '../types/offer-types';
import { CommentsListType } from '../types/comment-types';
import mockOfferList from './offer-list.json';
import mockOfferDetails from './offer-details.json';
import mockCommentsList from './comments.json';
import mockFavorites from './favorites-list.json';

export const getMockOfferList = (): OfferListType => {
  const offerListClone: OfferListType = structuredClone(mockOfferList);
  return offerListClone.filter((item) => item.city.name === 'Paris').slice(0, 5);
};

export const getMockOfferDetails = (): OfferDetailsType => {
  const offerDetailsClone: OfferDetailsType = structuredClone(mockOfferDetails);
  return offerDetailsClone;
};

export const getMockCommentsList = (): CommentsListType => {
  const commentsListClone: CommentsListType = structuredClone(mockCommentsList);
  return commentsListClone;
};

export const getMockFavorites = ():FavoriteGroupType => {
  const favoritesListClone = structuredClone(mockFavorites);
  const favoritesGroupList: {[key: string]: OfferType[]} = {};

  favoritesListClone.forEach((item) => {
    if (!(item.city.name in favoritesGroupList)) {
      favoritesGroupList[item.city.name] = [];
    }
    favoritesGroupList[item.city.name].push(item);
    return favoritesGroupList;
  });

  return Object.entries(favoritesGroupList);
};

