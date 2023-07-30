import { useState } from 'react';
import { OfferListType } from '../../types/offer-types';
import MainOfferCard from '../proxy/main-offer-card';

export type CardListProps = {
  offersList: OfferListType;
  onOfferSelect: (id: string) => void;
  className?: string;
}

export default function CardList({ offersList, onOfferSelect, className = ''}: CardListProps): JSX.Element {

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
    <div className={`${className} places__list}`}>
      {offersList.map((item) => <MainOfferCard offerItem={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={item.id} />)}

    </div>
  );
}
