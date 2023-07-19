import { useState } from 'react';
import { OfferList } from '../../types/offer-types';
import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
  offersList: OfferList;
}

export default function OfferCardList(props: OfferCardListProps): JSX.Element {

  const [, setState] = useState({
    activeId: ''
  });

  // const handleMouseOver = useCallback((id: string): void => {
  //   setState({activeId: id});
  // }, []);

  // const handleMouseLeave = useCallback((): void => {
  //   setState({activeId: ''});
  // }, []);

  // смена состояния происходит  за 1-1.5 сек/ Постоянная перерисовка при движении курсора по карточке
  const handleMouseEnter = (id: string) => setState((prevState) => ({ ...prevState, activeId: id }));
  const handleMouseLeave = () => setState((prevState) => ({ ...prevState, activeId: '' }));

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offersList.map((item) => <OfferCard offerItem={item} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isMainPage key={item.id} />)}

    </div>
  );
}
