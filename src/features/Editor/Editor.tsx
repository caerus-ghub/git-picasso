import React from 'react';

import useEditor, { selectFirstWeek, selectInitialDay } from './hooks/useEditor';
import Calendar from './components/Calendar';

const Editor = () => {
  const firstWeek = useEditor(selectFirstWeek);
  const initialDay = useEditor(selectInitialDay);

  return (
    <>
      <Calendar></Calendar>
    </>
  );
}

export default Editor;
