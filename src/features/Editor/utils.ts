import { add, lastDayOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';

export const getWeekDays = (day: Date) => {
  const firstDay = startOfWeek(day);
  const lastDay = lastDayOfWeek(day);
  let week = eachDayOfInterval({ start: firstDay, end: lastDay });

  return week;
}

export const getAllDays = (day: Date) => {
  const firstDay = startOfWeek(day);
  const lastDay = lastDayOfWeek(lastDayOfWeek(add(day, { years: 1 })));

  return eachDayOfInterval({ start: firstDay, end: lastDay });
}
