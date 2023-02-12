import { DAY_WIDTH, DAY_HEIGHT, DAY_OFFSET, DAY_ROWS } from './constants';

export const calculateHorizontalOffsetOfDay = (dayIndex: number) => {
  const rowNumber = Math.floor(dayIndex / DAY_ROWS);

  return (rowNumber * DAY_OFFSET) + (rowNumber * DAY_WIDTH);
};

export const calculateVerticalOffsetOfDay = (dayIndex: number) => {
  const colNumber = dayIndex % DAY_ROWS;

  return (colNumber * DAY_OFFSET) + (colNumber * DAY_HEIGHT);
};
