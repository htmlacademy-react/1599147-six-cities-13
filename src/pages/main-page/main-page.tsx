import cn from 'classnames';
import { useState } from 'react';

import { OfferListType } from '../../types/offer-types';
import { CityItemType } from '../../types/cities-types';

import CitiesFilter from '../../components/cities-filter/cities-filter';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import { cityList } from '../../constants/cities-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import NullOfferList from '../../components/null-offer-list/null-offer-list';
import Map from '../../components/map/map';

type MainPageProps = {
  offerCount: number;
  offersList: OfferListType;
}

export default function MainPage(props: MainPageProps): JSX.Element {

  // TODO - защита от того, если координат города нет - назначить точку по-умолчанию
  //TODO - при связи с картой перерисовывается вся  страница.  включая заголовок и фильтры. оно нам надо?
  const fakeCurrentCity: CityItemType | undefined = cityList.find((item) => item.name === 'Amsterdam');

  const [selectedOfferId, setSelectedOffer] = useState('');

  const handleOfferSelect = (id: string) => setSelectedOffer(id);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn(
        'page__main',
        'page__main--index',
        { 'page__main--index-empty': props.offersList.length === 0 })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesFilter cityList={cityList} />
        </div>
        <div className="cities">

          <div className={cn(
            'cities__places-container',
            {'cities__places-container--empty': props.offersList.length === 0},
            'container')}
          >
            { props.offersList.length > 0 && (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{props.offerCount} places to stay in {fakeCurrentCity?.name}</b>
                  <SortForm />
                  <OfferCardList offersList={props.offersList} onOfferSelect={handleOfferSelect} />
                </section>
                <div className="cities__right-section">
                  <Map city={fakeCurrentCity} mapPoints={props.offersList} selectedOfferId={selectedOfferId} />
                </div>
              </>)}
            {props.offersList.length === 0 && (
              <NullOfferList />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
