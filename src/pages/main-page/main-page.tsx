import CitiesFilter from '../../components/cities-filter/cities-filter';
import OfferCard from '../../components/offer-card/offer-card';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import { cityList } from '../../constants/cities-list';
import { OfferList } from '../../types/offer-types';


type MainPageProps = {
  offerCount: number;
  offersList: OfferList;
}

export default function MainPage(props : MainPageProps): JSX.Element {

  // const fakeArray = Array.from({ length: props.placesCount }, (value, index) => index);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesFilter cityList={cityList} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {/* в  секцию "places" передается список, отфильтрованный по городу + имя города !!!
            так же как и в фаворитах (фавориты сгруппированы по городам) надо ли выделять в самостоятельный компонент ?*/}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offerCount} places to stay in Amsterdam</b>
              {/* сомневаюсь в выделении SortForm*/}
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {props.offersList.map((item) => <OfferCard offerItem={item} isMainPage key={item.id} />)}

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
