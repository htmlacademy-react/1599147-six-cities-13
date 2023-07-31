import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../constants/cities-list';
import { OfferListType } from '../types/offer-types';
import { changeCity } from './action';

type OfferListState = {
  city: string;
  offerList: OfferListType;
}

const initialState: OfferListState = {
  city: DEFAULT_CITY.name,
  offerList: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    });
});
