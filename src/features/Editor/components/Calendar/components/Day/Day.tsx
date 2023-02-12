import React, { useMemo } from 'react';

import { DAY_WIDTH, DAY_HEIGHT } from '../../constants';
import { calculateHorizontalOffsetOfDay, calculateVerticalOffsetOfDay } from '../../utils';

import { IDay } from './types';
import { Rect } from './styles';

const Day: IDay = ({ date, index }) => {
  const horizontalOffset = useMemo(() => calculateHorizontalOffsetOfDay(index), [index]);
  const verticalOffset = useMemo(() => calculateVerticalOffsetOfDay(index), [index]);

  return (
    <>
      <Rect width={DAY_WIDTH} height={DAY_HEIGHT} rx={2} ry={2} x={horizontalOffset} y={verticalOffset} />
    </>
  );
}

export default Day;
