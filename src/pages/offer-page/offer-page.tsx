import { Helmet } from 'react-helmet-async';
import cn from 'classnames';
import { useParams } from 'react-router-dom';


import { OfferDetailsType, OfferListType, OfferType } from '../../types/offer-types';
import { CommentsListType } from '../../types/comment-types';
import { CityItemType } from '../../types/cities-types';

import Header from '../../components/header/header';
import NewReview from '../../components/new-review/new-review';
import ReviewList from '../../components/review-list/review-list';
import NearOfferList from '../../components/proxy/near-offer-list';
import Map from '../../components/map/map';

import { calcRatingWidth, capitalize } from '../../utils/utils';

import { AuthStatus, AuthStatusType } from '../../constants/auth-status';
import { getMockCommentsList, getMockOfferDetails, getMockOfferList } from '../../mocks/mock-model';
import { getAdaptedOffer } from './offer-page-helper';

type OfferPageProps = {
  authStatus: AuthStatusType;
}

export default function OfferPage(props: OfferPageProps): JSX.Element {

  const {id} = useParams<string>();

  // TODO - запрос с сервера и всё дальнейшее - только, если всё ок
  const offerDetails: OfferDetailsType = getMockOfferDetails();

  const offerCity: CityItemType = offerDetails.city;

  // TODO - запрос nearList с сервера
  //TODO - случайная выборка
  const offersData = getMockOfferList();
  const nearList: OfferListType = offersData.filter((item) => item.city.name === offerCity.name).slice(7, 9);
  const currentOfferToMap: OfferType = getAdaptedOffer({ ...offerDetails, id: id });
  nearList.push(currentOfferToMap);

  // TODO - запрос с сервера
  const commentsList: CommentsListType = getMockCommentsList();

  // TODO статус авторизации - из глобального состояния
  const { authStatus } = props;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerDetails.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              { offerDetails.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerDetails.title}
                </h1>
                <button className={cn(
                  'offer__bookmark-button',
                  'button',
                  {'offer__bookmark-button--active': offerDetails.isFavorite}
                )} type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {offerDetails.isFavorite ? 'In bookmarks' : 'To bookmarks '}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: `${calcRatingWidth(offerDetails.rating)}%`}}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerDetails.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(offerDetails.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerDetails.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerDetails.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerDetails.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {offerDetails.goods.length > 0 && (
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offerDetails.goods.map((item) => (
                      <li className="offer__inside-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={cn(
                    'offer__avatar-wrapper',
                    { 'offer__avatar-wrapper--pro': offerDetails.host.isPro },
                    'user__avatar-wrapper'
                  )}
                  >
                    <img className="offer__avatar user__avatar" src={offerDetails.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offerDetails.host.name}
                  </span>
                  {offerDetails.host.isPro && (
                    <span className="offer__user-status">
                    Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerDetails.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>

                <ReviewList commentsList={commentsList}/>

                {authStatus === AuthStatus.Auth && (
                  <NewReview />
                )}
              </section>
            </div>
          </div>

          <Map city={offerCity} mapPoints={nearList} selectedOfferId={id} className='offer__map'/>

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOfferList offersList={nearList} />

          </section>
        </div>
      </main>
    </div>
  );
}
