import MainOfferList from '../proxy/main-offer-list';
import SortForm from '../sort-form/sort-form';
import Map from '../map/map';
import { CityItemType } from '../../types/cities-types';
import { OfferListType } from '../../types/offer-types';
import { useState } from 'react';

type MainOffersProps = {
  currentCity?: CityItemType;
  currentOfferList: OfferListType;
}

export default function MainOffers(props: MainOffersProps): JSX.Element {

  const { currentCity, currentOfferList } = props;

  const [selectedOfferId, setSelectedOffer] = useState('');
  const handleOfferSelect = (id: string) => setSelectedOffer(id);

  return (
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
    </>
  );

}

