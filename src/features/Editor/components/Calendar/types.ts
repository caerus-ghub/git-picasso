import { FC } from 'react';

export type ICalendar = FC<{
  firstDay: Date;
  allDays: Date[];
}>
