
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import './LaunchFilter.css';

const sucess = ['All', 'Yes', 'No', 'Pending'];
const date = ['All', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2010', '2009', '2008', '2007', '2006'];
const location = ['All',
  'Vandenberg Air Force Base Space Launch Complex 4E',
  'Kwajalein Atoll Omelek Island',
  'Cape Canaveral Air Force Station Space Launch Complex 40',
  'Kennedy Space Center Historic Launch Complex 39A'];

const LaunchFilter = ({ filter = 'All', handleChange }) => (

  <div className="filter-div">
    <span className="filter-by">FILTER BY:</span>
    <div className="success-div">
      <span>LAUNCH SUCCESS: </span>
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
    </div>
    <div className="year-div">
      <span>YEAR: </span>
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
    </div>
    <div className="location-div">
      <span>LAUNCH LOCATION: </span>
      <select
        id="Location"
        onChange={handleChange}
        value={filter}
        className="location"
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
