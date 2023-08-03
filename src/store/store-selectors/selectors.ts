import { AppState } from '../reducer';

export const getCurrentCity = (state: AppState) => state.city;

export const getStoredOffers = (state: AppState) => state.offerList;
