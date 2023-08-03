import MainOfferList from '../proxy/main-offer-list';
import SortForm from '../sort-form/sort-form';
import Map from '../map/map';
import { OfferListType } from '../../types/offer-types';
import { useState } from 'react';
import { DEFAULT_SORT, SortKindType } from '../../constants/sort-constants';
import { getSortedOfferList } from './main-helpers';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/store-selectors/selectors';

type MainOffersProps = {
  currentOfferList: OfferListType;
}

export default function MainOffers(props: MainOffersProps): JSX.Element {

  const { currentOfferList } = props;

  const currentCity = useAppSelector(getCurrentCity);

  const [selectedOfferId, setSelectedOffer] = useState<string>('');
  const handleOfferSelect = (id: string) => setSelectedOffer(id);

  const [currentSort, setCurrentSort] = useState<SortKindType>(DEFAULT_SORT);
  const handleSortChange = (type: SortKindType): void => {
    setCurrentSort(type);
  };

  const sortedOfferList: OfferListType = getSortedOfferList(currentOfferList, currentSort);

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

