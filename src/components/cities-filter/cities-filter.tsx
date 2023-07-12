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
            <a className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} href="#" >
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
