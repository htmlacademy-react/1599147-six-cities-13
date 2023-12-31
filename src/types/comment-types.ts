export type CommentsListType = CommentType[]

export type CommentType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
