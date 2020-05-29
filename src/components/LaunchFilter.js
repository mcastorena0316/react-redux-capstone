
import React from 'react';
import PropTypes from 'prop-types';


const sucess = ['All', 'Yes', 'No', 'Pending'];
const date = ['All', '2020', '2017', '2016', '2015', '2014', '2013', '2012', '2010', '2009', '2008', '2007', '2006'];
const location = ['All',
  'Vandenberg Air Force Base Space Launch Complex 4E',
  'Kwajalein Atoll Omelek Island',
  'Cape Canaveral Air Force Station Space Launch Complex 40',
  'Kennedy Space Center Historic Launch Complex 39A'];

const LaunchFilter = ({ filter = 'All', handleChange }) => (
  <div>

    <span>LAUNCH SUCESS: </span>
    <select
      id="sucess"
      onChange={handleChange}
      value={filter}
    >
      {sucess.map(x => (
        <option
          key={Math.random()}
          value={x}
        >
          {x}
        </option>
      ))}
    </select>
    <span>SELECT DATE: </span>
    <select
      id="Date"
      onChange={handleChange}
      value={filter}
    >
      {date.map(x => (
        <option
          key={Math.random()}
          value={x}
        >
          {x}
        </option>
      ))}
    </select>
    <span>SELECT LAUNCH LOCATION: </span>
    <select
      id="Location"
      onChange={handleChange}
      value={filter}
    >
      {location.map(x => (
        <option
          key={Math.random()}
          value={x}
        >
          {x}
        </option>
      ))}
    </select>
  </div>
);


LaunchFilter.propTypes = {
  handleChange: PropTypes.func,

  filter: PropTypes.string,
};

LaunchFilter.defaultProps = {
  handleChange: () => { },
  filter: '',
};


export default LaunchFilter;
