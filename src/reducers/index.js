import { combineReducers } from 'redux';
import fetchedReducer from './fetchedReducer';
import missionReducer from './missionReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  launches: fetchedReducer,
  mission: missionReducer,
  filter: filterReducer,
});
