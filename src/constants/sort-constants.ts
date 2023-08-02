export const SORT_LIST = {
  popular: 'Popular',
  priceAsc: 'Price: low to high',
  priceDesc: 'Price: high to low',
  top: 'Top rated first',
} as const;

export const sortKind = ['popular', 'priceAsc', 'priceDesc', 'top'] as const;
export type SortKindType = typeof sortKind[number]

export const DEFAULT_SORT = sortKind[0];


