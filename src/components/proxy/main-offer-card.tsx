import OfferCard, { OfferCardProps } from '../offer-card/offer-card';

export default function MainOfferCard(props: OfferCardProps): JSX.Element {
  const { ...restProps } = props;

  return (
    <OfferCard
      {...restProps}
      className={'cities__card'}
      innerClassList={{
        imageWrapperClass: 'cities__image-wrapper',
        cardInfoClass: ''
      }}
    />);

}

