/* eslint-disable no-unused-expressions */
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchData, fetchOneMission, filterSuccess } from '../../actions/index';
import '../../setupTests';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const mock = new MockAdapter(axios);

beforeEach(() => {
  store.clearActions();
});


describe('test actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Should get All Misions from fetchData', () => {
    mock.onGet('/').reply(200, {
      data: [{
        mission_name: 'USCV-1 (NASA Crew Flight 1)',
        links: {
          mission_patch_small: 'https://spacexpatches.weebly.com/uploads/8/8/4/0/88400246/uscv1-nasa-spacex_orig.png',
        },
      }],
    });

    store.dispatch(fetchData()).then(() => {
      const expectedActions = [{
        type: 'ADD FETCHED DATA',
        payload: {
          data: [{
            mission_name: 'USCV-1 (NASA Crew Flight 1)',
            links: {
              mission_patch_small: 'https://spacexpatches.weebly.com/uploads/8/8/4/0/88400246/uscv1-nasa-spacex_orig.png',
            },
          }],
        },
      }];

      expect(store.getActions()).toEqual(expectedActions);
    }).catch(error => error);
  });

  it('Should render one mission from fetchOneMission', () => {
    mock.onGet('/mision/1').reply(200, {
      data: {
        flight_number: 65,
        mission_name: 'Telstar 19V',
        mission_id: [
          'F4F83DE',
        ],
      },
    });

    store.dispatch(fetchOneMission(65)).then(() => {
      const expectedActions = [{
        type: 'DISPLAY FETCHED DATA',
        payload: {
          data: {
            flight_number: 65,
            mission_name: 'Telstar 19V',
            mission_id: [
              'F4F83DE',
            ],
          },
        },
      }];

      expect(store.getActions()).toEqual(expectedActions);
    }).catch(error => error);
  });

  it('Should dispatches the correct action and payload when selectin 2019 filter', () => {
    const expectedActions = [
      {
        payload: '2019',
        type: 'SUCESS FILTER',
      },
    ];
    store.dispatch(filterSuccess('2019'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
