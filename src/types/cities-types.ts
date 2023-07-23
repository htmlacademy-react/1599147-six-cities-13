import { LocationType } from './offer-types';

export type CityItemType = {
  name: string;
  isActive: boolean;
  location: LocationType;
}

export type CityListType = CityItemType[];
