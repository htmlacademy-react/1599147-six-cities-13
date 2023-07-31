import OfferCard, { OfferCardProps } from '../offer-card/offer-card';

export default function NearOfferCard(props: OfferCardProps): JSX.Element {
  const { ...restProps } = props;

  return (
    <OfferCard
      {...restProps}
      className={'near-places__card'}
      innerClassList={{
        imageWrapperClass: 'near-places__image-wrapper',
        cardInfoClass: ''
      }}
    />);

}
