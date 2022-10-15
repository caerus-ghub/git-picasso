import create from 'zustand';

import { getStartWeek } from '../../utils';

import { IEditorSlice } from './types';

const useEditor = create<IEditorSlice>((set) => ({
  initialDay: new Date(),
  setInitialDay: (date: Date) => set({ initialDay: date })
}));

export const selectFirstWeek = (slice: IEditorSlice) => getStartWeek(slice.initialDay);
export const selectInitialDay = (slice: IEditorSlice) => slice.initialDay;

export default useEditor;
