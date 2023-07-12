import MainPage from '../../pages/main-page/main-page';
import { CitiesListType } from '../../types/cities-types';

type AppProps = {
  pageCardCount: number;
  offerByCityCount: number;
  cityList: CitiesListType;
}

export default function App(props: AppProps): JSX.Element {
  const { pageCardCount, offerByCityCount, cityList } = props;

  return (
    <MainPage placesCount={pageCardCount} offerCount={offerByCityCount} cityList={cityList} />

  );
}
