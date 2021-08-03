import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import type {} from '@reduxjs/toolkit';
import type { INews } from 'src/types/news';
import type { SortByType } from 'src/types/settings';

const sliceName = 'newsFilters';

type InitialStateType = {
  from?: any;
  to?: any;
  sortBy?: SortByType;
  qInTitle?: string;
};

const initialState: InitialStateType = {
  from: null,
  to: format(new Date(), 'yyyy-MM-dd'),
  sortBy: 'publishedAt',
  qInTitle: '',
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilters(
      state: InitialStateType,
      action: PayloadAction<InitialStateType>,
    ) {
      const { from, to, sortBy, qInTitle } = action.payload;
      if (from) {
        state.from = from;
      }
      if (to) {
        state.to = to;
      }
      if (sortBy) {
        state.sortBy = sortBy;
      }
      if (qInTitle?.length) {
        state.qInTitle = qInTitle;
      }
    },
    resetFilters(
      state: InitialStateType,
    ) {
      state.from = initialState.from;
      state.to = initialState.to;
    }
  }
});

export const { setFilters, resetFilters } = slice.actions;

export const { reducer } = slice;

export default slice;
