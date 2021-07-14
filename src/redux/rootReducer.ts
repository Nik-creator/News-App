import { combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from 'src/redux/slice/app';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
