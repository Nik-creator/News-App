import { combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from 'src/redux/slice/app';
import { reducer as newsReducer } from 'src/redux/slice/news';
import { reducer as settingsReducer } from 'src/redux/slice/settings';
import { reducer as newsFilters } from 'src/redux/slice/newsFilters';

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
  settings: settingsReducer,
  newsFilters,
});

export default rootReducer;
