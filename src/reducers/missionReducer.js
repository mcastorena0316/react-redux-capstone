import { DISPLAY_FETCHED_DATA } from '../actions/index';


export default function missionReducer(state = {}, action) {
  switch (action.type) {
    case DISPLAY_FETCHED_DATA:
      return action.payload;
    default:
      return state;
  }
}
