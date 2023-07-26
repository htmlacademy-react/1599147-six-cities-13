import dayjs from 'dayjs';

const RATING_PERCENT = 20;
export const calcRatingWidth = (rating: number): number => rating * RATING_PERCENT;

export const capitalize = (text: string): string => {
  const startSymbol = text.charAt(0).toUpperCase();
  return `${startSymbol}${text.slice(1)}`;
};

export const getFormattingDate = (date: string): string => (dayjs(date).format('MMMM YYYY'));
