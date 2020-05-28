import { combineReducers } from 'redux';
import filterReducer from './filter';

export default combineReducers({
  filter: filterReducer,
});
