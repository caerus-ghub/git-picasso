import { getWeek } from 'date-fns';

export const getStartWeek = (date: Date) => {
  return getWeek(date);
}
