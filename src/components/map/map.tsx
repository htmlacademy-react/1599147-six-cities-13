import { CityItemType } from '../../types/cities-types';

type MapProps = {
  city: CityItemType | undefined;
}

export default function Map(props: MapProps): JSX.Element {
  const { city } = props;
  console.log(city);

  return (
    <section className="cities__map map"
      style={{
        height: `${794}px`
      }}
    >
    </section>
  );
}
