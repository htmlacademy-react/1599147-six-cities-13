import cn from 'classnames';
import { useEffect } from 'react';

import CitiesFilter from '../../components/cities-filter/cities-filter';
import Header from '../../components/header/header';
import NullOfferList from '../../components/null-offer-list/null-offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOfferList } from '../../store/action';
import MainOffers from '../../components/main-offers/main-offers';

export default function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const offersData = useAppSelector((state) => state.offerList);
  const currentOfferList = offersData.filter((item) => item.city.name === currentCity?.name);

  useEffect(() => {
    dispatch(loadOfferList());
  }, [dispatch]);

  const isOffersListEmpty = currentOfferList.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn(
        'page__main',
        'page__main--index',
        { 'page__main--index-empty': isOffersListEmpty })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesFilter />
        </div>
        <div className="cities">

          <div className={cn(
            'cities__places-container',
            {'cities__places-container--empty': isOffersListEmpty},
            'container')}
          >
            {!isOffersListEmpty ? (
              <MainOffers currentCity={currentCity} currentOfferList={currentOfferList}/>
            ) : (<NullOfferList />)}
          </div>
        </div>
      </main>
    </div>
  );
}
