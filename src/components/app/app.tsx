import MainPage from '../../pages/main/main';

const fakePlaceCount = 5;
const offerCount = 313;

export default function App(): JSX.Element {
  return (
    <MainPage placesCount={fakePlaceCount} offerCount={offerCount} />
  );
}
