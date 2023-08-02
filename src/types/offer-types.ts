export type OfferListType = OfferType[]

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage?: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type CityType = {
  name: string;
  location: LocationType;
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferDetailsType = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: CityType;
  location: LocationType;
  goods: string[];
  host: HostType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}

export type HostType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type FavoriteGroupType = [cityName: string, offers: OfferType[]][]
