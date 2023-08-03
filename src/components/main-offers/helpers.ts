import { SortKindType } from '../../constants/sort-constants';
import { OfferListType, OfferType } from '../../types/offer-types';

export const sortCallbackMap = {
  popular: () => 0,
  priceAsc: (a: OfferType, b:OfferType):number => a.price - b.price,
  priceDesc: (a: OfferType, b:OfferType):number => b.price - a.price,
  top: (a: OfferType, b:OfferType):number => b.rating - a.rating,
};

export const getSortedOfferList = (offerList: OfferListType, sortedKind: SortKindType): OfferListType => {
  const result = offerList.slice().sort(sortCallbackMap[sortedKind]);
  return result;
};

