import axios from 'axios';

export const ADD_FETCHED_DATA = 'ADD FETCHED DATA';

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
