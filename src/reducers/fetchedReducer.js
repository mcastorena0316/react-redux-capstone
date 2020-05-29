import { ADD_FETCHED_DATA } from '../actions/index';


export default function fetchedReducer(state = [], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return [...action.payload];
    default:
      return state;
  }
}
