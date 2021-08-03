import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/redux/index';
import API from 'src/API/api';
import type { Weather } from 'src/types/weather';
import parseObject from 'src/helpers/parseObject';

const sliceName = 'weather';

type WeatherType = {
  loading: boolean;
  data: Weather
};

const initialState: WeatherType = {
  loading: false,
  data: {},
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setWeather(
      state: WeatherType,
      action: PayloadAction<Weather>
    ) {
      // TODO нужно либо сделать help функцию для нормализации store, либо сделать middleware, но тогда нужно переписывать rootreducer
      // const {
      //   current,
      //   forecast,
      //   location
      // } = action.payload;
      // parseObject(current, forecast, location);
      state.data = action.payload;
    },
    setLoading(
      state: WeatherType,
      action: PayloadAction<boolean>
    ) {
      state.loading = action.payload;
    }
  }
});

export const fetchWeather = (q: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  const data = await API.getWeather(q);
  dispatch(slice.actions.setWeather(data));
  dispatch(slice.actions.setLoading(false));
};

export const { reducer } = slice;

export default slice;
