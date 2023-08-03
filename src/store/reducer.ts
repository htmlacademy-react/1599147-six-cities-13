import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../constants/cities-list';
import { OfferListType } from '../types/offer-types';
import { changeCity, loadOfferList } from './action';
import { CityItemType } from '../types/cities-types';

import mockOfferList from '../mocks/offer-list.json';

export type AppState = {
  city?: CityItemType;
  offerList: OfferListType;
}

const initialState: AppState = {
  city: DEFAULT_CITY,
  offerList: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOfferList, (state) => {
      state.offerList = mockOfferList;
    });
});
