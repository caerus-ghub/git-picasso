import { startOfWeek } from 'date-fns';

import { getAllDays } from '../../utils';

import { IEditorSlice } from './types';

export const selectInitialDay = (slice: IEditorSlice) => slice.initialDay;

export const selectFirstDay = (slice: IEditorSlice) => {
  const initialDay = selectInitialDay(slice);
  const firstDay =  startOfWeek(initialDay);

  return firstDay;
}

export const selectAllDays = (slice: IEditorSlice) => {
  const firstDay = selectFirstDay(slice);
  const allDays = getAllDays(firstDay);

  return allDays;
}
