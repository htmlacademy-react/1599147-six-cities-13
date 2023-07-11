import { CitiesListType } from '../../types/cities-types';

type CitiesListProps = {
  cityList: CitiesListType;
}

export default function CitiesList({cityList}: CitiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityList.map((item) => (
          <li key={crypto.randomUUID()} className="locations__item">
            <a className={`locations__item-link tabs__item ${item.isActive ? 'tabs__item--active' : ''}`} href="#" >
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
