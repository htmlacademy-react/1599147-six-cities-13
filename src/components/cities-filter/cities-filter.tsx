import { Link } from 'react-router-dom';
import { CitiesList } from '../../types/cities-types';
import { AppRoute } from '../../constants/app-routes';

type CitiesFilterProps = {
  cityList: CitiesList;
}

export default function CitiesFilter({cityList}: CitiesFilterProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map((item) => (
          <li key={item.name} className="locations__item">
            <Link to={AppRoute.Root} className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
