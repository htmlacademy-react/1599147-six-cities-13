import MainPage from '../../pages/main/main';
import { cityList } from '../../config/cities-list';

const fakePlaceCount = 5;
const offerCount = 313;

export default function App(): JSX.Element {
  return (
    <MainPage placesCount={fakePlaceCount} offerCount={offerCount} cityList={cityList}/>
  );
}
