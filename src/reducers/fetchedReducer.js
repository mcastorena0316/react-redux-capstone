import { ADD_FETCHED_DATA } from '../actions/index';

const initialState = {
  mission_name: 'USCV-1 (NASA Crew Flight 1)',
  links: {
    mission_patch_small: 'https://spacexpatches.weebly.com/uploads/8/8/4/0/88400246/uscv1-nasa-spacex_orig.png',
  },
};

export default function fetchedReducer(state = [initialState], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return [...action.payload];
    default:
      return state;
  }
}
