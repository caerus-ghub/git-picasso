import create from 'zustand';
import { startOfWeek } from 'date-fns';

import { getAllDays } from '../../utils';

import { IEditorSlice } from './types';

const useEditor = create<IEditorSlice>((set) => ({
  initialDay: new Date(),
  setInitialDay: (date: Date) => set({ initialDay: date })
}));

export default useEditor;
