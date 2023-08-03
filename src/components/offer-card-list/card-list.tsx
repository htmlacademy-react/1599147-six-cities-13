// import { useState } from 'react';
import { OfferListType } from '../../types/offer-types';
import MainOfferCard from '../proxy/main-offer-card';
import NearOfferCard from '../proxy/near-offer-card';

export type CardListProps = {
  offersList: OfferListType;
  onOfferSelect?: (id: string) => void;
  className?: string;
  componentRole?: string;
}

export default function CardList({ offersList, onOfferSelect, className = '', componentRole}: CardListProps): JSX.Element {

  const handleMouseEnter = (id: string) => {
    if (onOfferSelect) {
      onOfferSelect(id);
    }
  };
  const handleMouseLeave = () => {
    if (onOfferSelect) {
      onOfferSelect('');
    }
  };

  let offers: JSX.Element[] = [];

  switch (componentRole) {
    case 'near':
      offers = offersList.map((item) => <NearOfferCard offerItem={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={item.id} />);
      break;

    default:
      offers = offersList.map((item) => <MainOfferCard offerItem={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={item.id} />);
      break;
  }

  return (
    <div className={`${className} places__list}`}>

      {offers}

    </div>
  );
}
