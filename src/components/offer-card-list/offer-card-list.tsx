import { useState } from 'react';
import { OfferListType } from '../../types/offer-types';
import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
  offersList: OfferListType;
  onOfferSelect: (id: string) => void;
}

export default function OfferCardList({ offersList, onOfferSelect}: OfferCardListProps): JSX.Element {

  const [, setState] = useState({ });

  const handleMouseEnter = (id: string) => {
    setState((prevState) => ({ ...prevState, activeId: id }));
    onOfferSelect(id);
  };
  const handleMouseLeave = () => {
    setState((prevState) => ({ ...prevState, activeId: '' }));
    onOfferSelect('');
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => <OfferCard offerItem={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isCityComponent key={item.id} />)}

    </div>
  );
}
