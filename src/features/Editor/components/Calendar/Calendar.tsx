import React, { useMemo } from 'react';

import { ICalendar } from './types';
import Day from './components/Day';

const Calendar: ICalendar = ({ firstDay, allDays }) => {
  const days = useMemo(() =>
    allDays.map((day, i) => <Day date={day} index={i} key={day.valueOf()} />)
  , [firstDay]);

  return (
    <>
      <svg>
        {days}
      </svg>
    </>
  );
}

export default Calendar;
