import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions/index';
import './MissionList.css';


export class MissionList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  render() {
    const { filter } = this.props;
    return (
      <div className="launches-div">
        <ul className="launches-list">
          {filter.map(mission => (
            <li
              key={mission.mission_name}
              className="launch"
            >
              {' '}
              {mission.links.mission_patch_small
              && <img src={mission.links.mission_patch_small} alt={mission.mission_name} />}
              {!mission.links.mission_patch_small && <img src="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png" alt={mission.mission_name} />}
              {mission.mission_name}


            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

export default connect(
  mapStateToProps,
  { fetchData },
)(MissionList);


MissionList.propTypes = {
  fetchData: PropTypes.func,
  filter: PropTypes.arrayOf(PropTypes.object),
};

MissionList.defaultProps = {
  fetchData: () => { },
  filter: {},
};
