import React from 'react';

import { IDay } from './types';
import { Rect } from './styles';

const Day: IDay = ({ date, index }) => {
  return (
    <>
      <Rect width={11} height={11} rx={2} ry={2}></Rect>
    </>
  );
}

export default Day;
