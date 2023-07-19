import React from 'react';
import cn from 'classnames';
import { OfferList } from '../../types/offer-types';
import CitiesFilter from '../../components/cities-filter/cities-filter';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import { cityList } from '../../constants/cities-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import NullOfferList from '../../components/null-offer-list/null-offer-list';

type MainPageProps = {
  offerCount: number;
  offersList: OfferList;
}

export default function MainPage(props : MainPageProps): JSX.Element {

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
            {/* в  секцию "places" передается список, отфильтрованный по городу + имя города !!!
            так же как и в фаворитах (фавориты сгруппированы по городам) надо ли выделять в самостоятельный компонент ?
            или как сделать "красиво"?*/}
            { props.offersList.length > 0 && (
              <React.Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{props.offerCount} places to stay in Amsterdam</b>
                  {/* сомневаюсь в выделении SortForm*/}
                  <SortForm />
                  <OfferCardList offersList={props.offersList} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map"></section>
                </div>
              </React.Fragment>)}
            {props.offersList.length === 0 && (
              <NullOfferList />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
