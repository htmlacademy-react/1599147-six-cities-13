import { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityItemType } from '../../types/cities-types';
import useMap from '../../hoock/use-map';
import { ACTIVE_PIN_ICON, DEFAULT_CITY, DEFAULT_PIN_ICON } from '../../constants/map';

type MapProps = {
  city: CityItemType | undefined;
}

export default function Map({ city = DEFAULT_CITY}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const activeIcon = leaflet.icon({
    iconUrl: ACTIVE_PIN_ICON,
    iconSize: [27, 39],
    iconAnchor: [14, 39]
  });
  const defaultIcon = leaflet.icon({
    iconUrl: DEFAULT_PIN_ICON,
    iconSize: [27, 39],
    iconAnchor: [14, 39]
  });

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
