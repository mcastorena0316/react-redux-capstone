import { combineReducers } from 'redux';
import fetchedReducer from './fetchedReducer';
import missionReducer from './missionReducer';

export default combineReducers({
  launches: fetchedReducer,
  mission: missionReducer,
});
