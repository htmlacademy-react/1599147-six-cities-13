import { IconOptions } from 'leaflet';

export const MAP_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const ACTIVE_PIN_ICON = 'img/pin-active.svg';
export const DEFAULT_PIN_ICON = 'img/pin.svg';

export const ACTIVE_ICON_CONFIG: IconOptions = {
  iconUrl: ACTIVE_PIN_ICON,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
};

export const DEFAULT_ICON_CONFIG: IconOptions = {
  iconUrl: DEFAULT_PIN_ICON,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
};
