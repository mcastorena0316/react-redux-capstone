
import React from 'react';
import PropTypes from 'prop-types';


const sucess = ['All', 'Yes', 'No', 'Pending'];

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
