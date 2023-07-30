import CardList, { CardListProps } from '../offer-card-list/card-list';

export default function NearOfferList(props: CardListProps): JSX.Element {
  const { ...restProps } = props;

  return (
    //TODO near - в константы  componentRole='near'
    <CardList className={'near-places__list'} componentRole='near' {...restProps} />
  );
}
