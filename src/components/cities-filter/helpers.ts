import { CITY_LIST } from '../../constants/cities-list';

export const getCityByName = (cityName: string) => CITY_LIST.find((item) => item.name === cityName);
