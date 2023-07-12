import { Link } from 'react-router-dom';
import { CitiesListType } from '../../types/cities-types';

type CitiesFilterProps = {
  cityList: CitiesListType;
}

export default function CitiesFilter({cityList}: CitiesFilterProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map((item) => (
          <li key={item.name} className="locations__item">
            <Link to='/' className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
