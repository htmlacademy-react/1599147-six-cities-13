import { LocationType } from './offer-types';

export type CityItemType = {
  name: string;
  location: LocationType;
}

export type CityListType = CityItemType[];
