import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isAuth: boolean
}

const sliceName = 'auth';
const initialState: AppState = {
  isAuth: false
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setUsersData(
      state: AppState,
      action: PayloadAction<boolean>
    ) {
      state.isAuth = action.payload;
    },
    deleteUsersLogin(
      state: AppState,
      action: PayloadAction<boolean>
    ) {
      state.isAuth = action.payload;
    }
  }
});

export const { setUsersData, deleteUsersLogin } = slice.actions;

export const { reducer } = slice;

export default slice;
