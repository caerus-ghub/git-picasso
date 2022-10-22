import React from 'react';

import useEditor, { selectAllDays, selectFirstDay } from './hooks/useEditor';
import Calendar from './components/Calendar';

const Editor = () => {
  const firstDay = useEditor(selectFirstDay)
  const allDays = useEditor(selectAllDays);

  return (
    <>
      <Calendar firstDay={firstDay} allDays={allDays}></Calendar>
    </>
  );
}

export default Editor;
