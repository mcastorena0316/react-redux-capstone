import fetchedReducer from '../../reducers/fetchedReducer';
import missionReducer from '../../reducers/missionReducer';
import filterReducer from '../../reducers/filterReducer';

describe('Test fetchedReducer', () => {
  test('Initial state is correct', () => {
    const action = { type: 'default' };
    const initialState = [{
      mission_name: 'USCV-1 (NASA Crew Flight 1)',
      links: {
        mission_patch_small: 'https://spacexpatches.weebly.com/uploads/8/8/4/0/88400246/uscv1-nasa-spacex_orig.png',
      },
    }];

    expect(fetchedReducer(undefined, action)).toEqual(initialState);
  });
});


describe('Test missionReducer', () => {
  test('returns the correct state ', () => {
    const action = {
      type: 'DISPLAY FETCHED DATA',
      payload: {
        flight_number: 65,
        mission_name: 'Telstar 19V',
        mission_id: [
          'F4F83DE',
        ],
      },
    };

    const expectedState = {
      flight_number: 65,
      mission_name: 'Telstar 19V',
      mission_id: [
        'F4F83DE',
      ],
    };

    expect(missionReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('Test filterReducer', () => {
  test('Initial state is correct', () => {
    const action = { type: 'default' };
    const initialState = 'All';

    expect(filterReducer(undefined, action)).toEqual(initialState);
  });

  test('returns the correct state', () => {
    const action = { type: 'SUCESS FILTER', payload: '2019' };
    const expectedState = '2019';

    expect(filterReducer(undefined, action)).toEqual(expectedState);
  });
});
