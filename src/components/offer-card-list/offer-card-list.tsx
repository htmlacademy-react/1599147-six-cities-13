import { OfferList } from '../../types/offer-types';
import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
  offersList: OfferList;
}

export default function OfferCardList(props: OfferCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offersList.map((item) => <OfferCard offerItem={item} isMainPage key={item.id} />)}

    </div>
  );
}
