import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import type {} from '@reduxjs/toolkit';
import type { INews } from 'src/types/News';

const sliceName = 'newsFilters';

type InitialStateType = {
  from?: any;
  to?: any;
};

const initialState: InitialStateType = {
  from: null,
  to: format(new Date(), 'yyyy-MM-d'),
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFilters(
      state: InitialStateType,
      action: PayloadAction<InitialStateType>,
    ) {
      const { from, to } = action.payload;
      if (from) {
        state.from = from;
      }
      if (to) {
        state.to = to;
      }
    }
  }
});

export const { setFilters } = slice.actions;

export const { reducer } = slice;

export default slice;
