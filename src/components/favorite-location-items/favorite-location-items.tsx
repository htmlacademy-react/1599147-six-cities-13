import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-routes';
import { OfferList } from '../../types/offer-types';
import OfferCard from '../offer-card/offer-card';

type FavoriteLocationItemsProps = {
  city: string;
  offerList: OfferList;
}

export default function FavoriteLocationItems(props: FavoriteLocationItemsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Root} className="locations__item-link">
            <span>{ props.city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {props.offerList.map((item) => <OfferCard offerItem={item} isFavoriteComponent key={item.id} />)}
      </div>
    </li>
  );
}
