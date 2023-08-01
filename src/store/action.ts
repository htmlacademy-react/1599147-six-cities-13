import { createAction } from '@reduxjs/toolkit';
import { CityItemType } from '../types/cities-types';
import { OfferListType } from '../types/offer-types';

export const changeCity = createAction<{ city: CityItemType | undefined}>('offer/changeCity');
export const loadOfferList = createAction<{ offerList: OfferListType }>('offer/loadOfferList');
