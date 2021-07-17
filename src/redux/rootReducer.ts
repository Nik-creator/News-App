import { combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from 'src/redux/slice/app';
import { reducer as newsReducer } from 'src/redux/slice/news';

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
});

export default rootReducer;
