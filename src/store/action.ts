import { createAction } from '@reduxjs/toolkit';
import { CityItemType } from '../types/cities-types';

export const changeCity = createAction<{ city?: CityItemType}>('offer/changeCity');
export const loadOfferList = createAction('offer/loadOfferList');
