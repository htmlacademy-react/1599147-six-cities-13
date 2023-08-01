import cn from 'classnames';
import { useEffect, useState } from 'react';

import CitiesFilter from '../../components/cities-filter/cities-filter';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import NullOfferList from '../../components/null-offer-list/null-offer-list';
import Map from '../../components/map/map';
import MainOfferList from '../../components/proxy/main-offer-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOfferList } from '../../store/action';

export default function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const [selectedOfferId, setSelectedOffer] = useState('');
  const handleOfferSelect = (id: string) => setSelectedOffer(id);
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
            { !isOffersListEmpty ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOfferList.length} places to stay in {currentCity?.name}</b>
                  <SortForm />
                  <MainOfferList offersList={currentOfferList} onOfferSelect={handleOfferSelect} />
                </section>
                <div className="cities__right-section">
                  <Map city={currentCity} mapPoints={currentOfferList} selectedOfferId={selectedOfferId} className='cities__map' />
                </div>
              </>) : (<NullOfferList />)}
          </div>
        </div>
      </main>
    </div>
  );
}
