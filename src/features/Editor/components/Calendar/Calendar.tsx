import React, { useMemo, ReactNode } from 'react';

import Day from './components/Day';

const Calendar = () => {
  const days = useMemo(() => {
    let output: ReactNode[] = [];

    for (let i = 0; i < 365; i++) {
      output.push(<Day key={i}/>);
    }

    return output;
  }, [])

  return (
    <>
      <svg>
        {days}
      </svg>
    </>
  );
}

export default Calendar;
