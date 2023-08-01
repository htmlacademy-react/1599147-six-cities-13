import cn from 'classnames';
import { useState } from 'react';

import { OfferListType } from '../../types/offer-types';
import CitiesFilter from '../../components/cities-filter/cities-filter';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import NullOfferList from '../../components/null-offer-list/null-offer-list';
import Map from '../../components/map/map';
import MainOfferList from '../../components/proxy/main-offer-list';
import { useAppSelector } from '../../hooks';

type MainPageProps = {
  offersList: OfferListType;
}

export default function MainPage(props: MainPageProps): JSX.Element {

  //TODO - при связи с картой перерисовывается вся  страница.  включая заголовок и фильтры. исправить?

  const [selectedOfferId, setSelectedOffer] = useState('');
  const handleOfferSelect = (id: string) => setSelectedOffer(id);
  const currentCity = useAppSelector((state) => state.city);

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
          <CitiesFilter />
        </div>
        <div className="cities">

          <div className={cn(
            'cities__places-container',
            {'cities__places-container--empty': props.offersList.length === 0},
            'container')}
          >
            {/* TODO - два условия на одно и то же - избавиться */}
            { props.offersList.length > 0 && (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{props.offersList.length} places to stay in {currentCity?.name}</b>
                  <SortForm />
                  <MainOfferList offersList={props.offersList} onOfferSelect={handleOfferSelect} />
                </section>
                <div className="cities__right-section">
                  <Map city={currentCity} mapPoints={props.offersList} selectedOfferId={selectedOfferId} className='cities__map' />
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
