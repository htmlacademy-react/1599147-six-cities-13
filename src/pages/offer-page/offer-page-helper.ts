import { OfferDetailsType, OfferType } from '../../types/offer-types';

export const getAdaptedOffer = (offerItemDetails: OfferDetailsType): OfferType => ({
  id: offerItemDetails.id,
  title: offerItemDetails.title,
  type: offerItemDetails.type,
  price: offerItemDetails.price,
  city: offerItemDetails.city,
  location: offerItemDetails.location,
  isFavorite: offerItemDetails.isFavorite,
  isPremium: offerItemDetails.isPremium,
  rating: offerItemDetails.rating
});
