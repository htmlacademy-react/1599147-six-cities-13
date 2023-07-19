import { Helmet } from 'react-helmet-async';

import FavoriteLocationItems from '../../components/favorite-location-items/favorite-location-items';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FavoriteGroupType } from '../../types/offer-types';

type FavoritesPageProps = {
  favoriteGroupList: FavoriteGroupType;
}

export default function FavoritesPage(props: FavoritesPageProps): JSX.Element {


  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {props.favoriteGroupList.map(([city, offerList]) => <FavoriteLocationItems city={city} offerList={offerList} key={city} />)}

            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );

}

