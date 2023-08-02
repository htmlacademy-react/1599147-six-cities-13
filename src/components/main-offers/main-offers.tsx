import MainOfferList from '../proxy/main-offer-list';
import SortForm from '../sort-form/sort-form';
import Map from '../map/map';
import { CityItemType } from '../../types/cities-types';
import { OfferListType, OfferType } from '../../types/offer-types';
import { useState } from 'react';
import { DEFAULT_SORT, SortKindType } from '../../constants/sort-constants';

type MainOffersProps = {
  currentCity?: CityItemType;
  currentOfferList: OfferListType;
}

const sortCallbackMap = {
  popular: () => 0,
  priceAsc: (a: OfferType, b:OfferType) => a.price - b.price,
  priceDesc: (a: OfferType, b:OfferType) => b.price - a.price,
  top: (a: OfferType, b:OfferType) => b.rating - a.rating,
};

export default function MainOffers(props: MainOffersProps): JSX.Element {

  const { currentCity, currentOfferList } = props;

  const [selectedOfferId, setSelectedOffer] = useState<string>('');
  const handleOfferSelect = (id: string) => setSelectedOffer(id);

  const [currentSort, setCurrentSort] = useState<SortKindType>(DEFAULT_SORT);
  const handleSortChange = (type: string): void => {
    setCurrentSort(type as SortKindType);
  };
  const sortedOfferList: OfferListType = currentOfferList.slice().sort(sortCallbackMap[currentSort]);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOfferList.length} places to stay in {currentCity?.name}</b>
        <SortForm currentSort={currentSort} onSortItemClick={handleSortChange} />
        <MainOfferList offersList={sortedOfferList} onOfferSelect={handleOfferSelect} />
      </section>
      <div className="cities__right-section">
        <Map city={currentCity} mapPoints={sortedOfferList} selectedOfferId={selectedOfferId} className='cities__map' />
      </div>
    </>
  );

}

