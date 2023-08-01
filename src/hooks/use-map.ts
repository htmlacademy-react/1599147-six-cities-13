import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import {Map} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityItemType } from '../types/cities-types';
import { MAP_ATTRIBUTION, MAP_LAYER } from '../constants/map';


export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityItemType): Map|null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          MAP_LAYER,
          {
            attribution: MAP_ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    } else {

      map?.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom
      );
    }

  }, [mapRef, city, map]);

  return map;
}
