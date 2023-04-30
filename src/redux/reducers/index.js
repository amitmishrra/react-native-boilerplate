import { combineReducers } from 'redux';
import themeReducer from './themes';
import loginReducer from './login';

export const combinedReducers = combineReducers({
  auth: {},
  user: loginReducer,
  theme: themeReducer,
});
