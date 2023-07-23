import { useRef } from 'react';
import { CityItemType } from '../../types/cities-types';
import useMap from '../../hoock/use-map';
import { DEFAULT_CITY } from '../../constants/map';

type MapProps = {
  city: CityItemType | undefined;
}

export default function Map({ city = DEFAULT_CITY}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <section className="cities__map map"
      ref={mapRef}
      style={{
        height: `${794}px`
      }}
    >
    </section>
  );
}
