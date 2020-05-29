import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { fetchData } from '../actions/index';
import './MissionList.css';


class MissionList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }


  render() {
    const { missions } = this.props;
    return (
      <div className="launches-div">
        <ul className="launches-list">
          {missions.map(mission => (
            <li
              key={mission.mission_name}
              className="launch"
            >
              <div className="launch-buttondiv">
                <Link to={`mission/${mission.flight_number}`}>
                  <button type="button">
                    {mission.links.mission_patch_small
              && <img src={mission.links.mission_patch_small} alt={mission.mission_name} />}
                    {!mission.links.mission_patch_small && <img src="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png" alt={mission.mission_name} />}
                  </button>
                </Link>
              </div>
              <div className="launch-title">
                {mission.mission_name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    missions: state.launches,
  };
}


MissionList.propTypes = {
  fetchData: PropTypes.func,
  missions: PropTypes.arrayOf(PropTypes.object),
};

MissionList.defaultProps = {
  fetchData: () => { },
  missions: {},
};

export default connect(
  mapStateToProps,
  { fetchData },
)(MissionList);
