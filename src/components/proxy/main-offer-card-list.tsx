import CardList, { CardListProps } from '../offer-card-list/card-list';

export default function MainOfferList(props: CardListProps): JSX.Element {
  const { ...restProps } = props;

  return (
    <CardList className={'tabs__content cities__places-list'} {...restProps} />
  );
}

