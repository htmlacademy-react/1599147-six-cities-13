import CitiesList from '../../components/cities-list/cities-list';
import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import { CitiesListType } from '../../types/cities-types';


type MainPageProps = {
  placesCount: number;
  offerCount: number;
  cityList: CitiesListType;
}

export default function MainPage(props : MainPageProps): JSX.Element {

  const fakeArray = new Array(props.placesCount);
  fakeArray.fill(Date.now());

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cityList={props.cityList} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offerCount} places to stay in Amsterdam</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {fakeArray.map(() => <CityCard key={crypto.randomUUID()} />)}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
