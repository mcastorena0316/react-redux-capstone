import axios from 'axios';

export const ADD_FETCHED_DATA = 'ADD FETCHED DATA';
export const DISPLAY_FETCHED_DATA = 'DISPLAY FETCHED DATA';

const apiUrl = 'https://api.spacexdata.com/v3/launches';

export const fetchData = () => dispatch => axios.get(apiUrl)
  .then(response => response.data)
  .then(data => {
    dispatch({
      type: ADD_FETCHED_DATA,
      payload: data,
    });
  })
  .catch(error => {
    throw (error);
  });

export const fetchOneMission = id => dispatch => axios.get(`${apiUrl}/${id}`)
  .then(response => response.data)
  .then(data => {
    dispatch({
      type: DISPLAY_FETCHED_DATA,
      payload: data,
    });
  })
  .catch(error => {
    throw (error);
  });
