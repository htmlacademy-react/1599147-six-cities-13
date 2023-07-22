export const RatingList: RatingListType = [
  {
    scope: 1,
    description: 'terribly'
  },
  {
    scope: 2,
    description: 'badly'
  },
  {
    scope: 3,
    description: 'not bad'
  },
  {
    scope: 4,
    description: 'good'
  },
  {
    scope: 5,
    description: 'perfect'
  }
] ;

export type RatingType = {
  scope: number;
  description: string;
}

export type RatingListType = RatingType[];
