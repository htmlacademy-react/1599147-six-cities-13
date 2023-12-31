import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../constants/app-routes';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITY_LIST } from '../../constants/cities-list';
import { changeCity } from '../../store/action';
import { getCurrentCity } from '../../store/store-selectors/selectors';
import { getCityByName } from './helpers';

export default function CitiesFilter(): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITY_LIST.map((item) => (
          <li key={item.name}
            className="locations__item"
            onClick={() => (dispatch(changeCity({ city: getCityByName(item.name) })))}
          >
            <Link to={AppRoute.Root} className={cn(
              'locations__item-link',
              'tabs__item',
              { 'tabs__item--active': item.name === currentCity?.name }
            )}
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
