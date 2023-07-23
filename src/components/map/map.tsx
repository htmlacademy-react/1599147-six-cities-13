import { useEffect, useRef } from 'react';
import leaflet, { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityItemType } from '../../types/cities-types';
import useMap from '../../hoock/use-map';
import { ACTIVE_PIN_ICON, DEFAULT_CITY, DEFAULT_PIN_ICON } from '../../constants/map';
import { OfferListType } from '../../types/offer-types';

type MapProps = {
  city: CityItemType | undefined;
  mapPoints: OfferListType;
  selectedOfferId?: string | undefined;
}

export default function Map({ city = DEFAULT_CITY, mapPoints, selectedOfferId = undefined}: MapProps): JSX.Element {

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
    <section className="cities__map map"
      ref={mapRef}
      style={{
        height: `${794}px`
      }}
    >
    </section>
  );
}
