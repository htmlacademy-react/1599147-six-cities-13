import { CityListType } from '../types/cities-types';

export const cityList: CityListType = [
  {
    name: 'Paris',
    isActive: true
  },
  {
    name: 'Cologne',
    isActive: false
  },
  {
    name: 'Brussels',
    isActive: false
  },
  {
    name: 'Amsterdam',
    isActive: false
  },
  {
    name: 'Hamburg',
    isActive: false
  },
  {
    name: 'Dusseldorf',
    isActive: false
  }
];

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export type CitiesList = typeof citiesList[number]
