import { useEffect, useRef } from 'react';
import leaflet, { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityItemType } from '../../types/cities-types';
import useMap from '../../hoock/use-map';
import { ACTIVE_ICON_CONFIG, DEFAULT_CITY, DEFAULT_ICON_CONFIG } from '../../constants/map';
import { OfferListType } from '../../types/offer-types';

type MapProps = {
  city?: CityItemType;
  mapPoints: OfferListType;
  selectedOfferId?: string;
  className?: string;
}

const activeIcon = leaflet.icon(ACTIVE_ICON_CONFIG);
const defaultIcon = leaflet.icon(DEFAULT_ICON_CONFIG);

export default function Map({ city = DEFAULT_CITY, mapPoints, selectedOfferId = '', className = ''}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      mapPoints.forEach((item) => {

        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude,
        }, { draggable: false });

        marker.setIcon(
          selectedOfferId !== '' && item.id === selectedOfferId ? activeIcon : defaultIcon)
          .addTo(markerLayer);
      });
    }
  }, [map, mapPoints, selectedOfferId]);

  return (
    <section className={`${className} map`}>
      <div ref={mapRef}
        style={{
          height: '100%'
        }}
      />
    </section>
  );
}
