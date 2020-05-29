import { SUCCESS_FILTER } from '../actions/index';


export default function filterReducer(state = 'All', action) {
  switch (action.type) {
    case SUCCESS_FILTER:
      return action.payload;
    default:
      return state;
  }
}
