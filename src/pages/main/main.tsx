import CitiesList from '../../components/cities-list/cities-list';
import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import { CitiesListType } from '../../types/cities-types';


type MainPagePropsTypes = {
  placesCount: number;
  offerCount: number;
  cityList: CitiesListType;
}

export default function MainPage(props : MainPagePropsTypes): JSX.Element {

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* places__options--opened */}
                <ul className="places__options places__options--custom">
                  {/* places__option--active */}
                  <li className="places__option" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
