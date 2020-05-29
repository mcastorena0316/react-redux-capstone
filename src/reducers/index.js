import { combineReducers } from 'redux';
import filterReducer from './filter';
import missionReducer from './missionReducer';

export default combineReducers({
  filter: filterReducer,
  mission: missionReducer,
});
