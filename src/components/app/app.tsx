import MainPage from '../../pages/main-page/main-page';
import { CitiesListType } from '../../types/cities-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type AppProps = {
  pageCardCount: number;
  offerByCityCount: number;
  cityList: CitiesListType;
}

export default function App(props: AppProps): JSX.Element {

  const { pageCardCount, offerByCityCount, cityList } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage placesCount={pageCardCount} offerCount={offerByCityCount} cityList={cityList}/> } />
      </Routes>
    </BrowserRouter>

  );
}
