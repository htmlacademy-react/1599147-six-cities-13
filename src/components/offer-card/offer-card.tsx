import { Link, generatePath } from 'react-router-dom';
import cn from 'classnames';
import { OfferType } from '../../types/offer-types.ts';
import { AppRoute } from '../../constants/app-routes.ts';
import { calcRatingWidth } from '../../utils/utils.ts';

type OfferInnerClassList = {
  imageWrapperClass: string;
  cardInfoClass: string;
}

export type OfferCardProps = {
  offerItem: OfferType;
  onMouseEnter?: (id:string) => void ;
  onMouseLeave?: () => void;
  innerClassList?: OfferInnerClassList;
  className?: string;
}

const defaultInnerClassList: OfferInnerClassList = {
  imageWrapperClass: '',
  cardInfoClass: ''
};

export default function OfferCard({
  offerItem,
  onMouseEnter = () => null,
  onMouseLeave = ()=> null,
  innerClassList = defaultInnerClassList,
  className = ''
}: OfferCardProps): JSX.Element {

  return (
    <article onMouseEnter={() => onMouseEnter(offerItem.id)} onMouseLeave={onMouseLeave} className={`${className} place-card`}>

      {offerItem.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${innerClassList.imageWrapperClass} place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer,{id: offerItem.id})} >
          <img className="place-card__image" src={offerItem.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className={`${innerClassList.cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ offerItem.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn(
            'place-card__bookmark-button',
            {'place-card__bookmark-button--active': offerItem.isFavorite},
            'button')}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              { offerItem.isFavorite ? 'In bookmarks' : 'To bookmarks '}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${calcRatingWidth(offerItem.rating)}%`}}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer,{id: offerItem.id})}>{ offerItem.title}</Link>
        </h2>
        <p className="place-card__type">{ offerItem.type}</p>
      </div>
    </article>
  );
}
