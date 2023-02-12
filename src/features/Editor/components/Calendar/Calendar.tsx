import React, { useMemo } from 'react';

import { SVG_CANVAS_WIDTH, SVG_CANVAS_HEIGHT } from './constants';

import { ICalendar } from './types';
import Day from './components/Day';

const Calendar: ICalendar = ({ firstDay, allDays }) => {
  const days = useMemo(() =>
    allDays.map((day, i) => <Day date={day} index={i} key={day.valueOf()} />)
    , [firstDay]);

  return (
    <>
      <svg width={SVG_CANVAS_WIDTH} height={SVG_CANVAS_HEIGHT}>
        {days}
      </svg>
    </>
  );
}

export default Calendar;
