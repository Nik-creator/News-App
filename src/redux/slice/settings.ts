import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  pageSize: number;
  fontSize: number;
}

const sliceName = 'settings';

const initialState: SettingsState = {
  fontSize: 16,
  pageSize: 10,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPageSize(
      state: SettingsState,
      action: PayloadAction<number>
    ) {
      state.pageSize = action.payload;
    },
    setFontSize(
      state: SettingsState,
      action: PayloadAction<number>
    ) {
      state.fontSize = action.payload;
    }
  }
});

export const { setPageSize, setFontSize } = slice.actions;

export const { reducer } = slice;

export default slice;
