import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { fetchData, filterSuccess } from '../actions/index';
import './MissionList.css';
import LaunchFilter from '../components/LaunchFilter';


class MissionList extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  handleChange(e) {
    const { filterSuccess } = this.props;
    const filter = e.target.value;
    filterSuccess(filter);
  }


  render() {
    const { missions } = this.props;
    const { filter } = this.props;
    let total;
    const filtered = filter === 'All' ? missions : missions.filter(mission => {
      if (mission.launch_success === false) {
        total = 'No';
      } else if (mission.launch_success === true) {
        total = 'Yes';
      } else {
        total = 'Pending';
      }
      return (
        total === filter);
    });


    return (
      <div className="launches-div">
        <LaunchFilter
          filter={filter}
          handleChange={this.handleChange}
        />
        <ul className="launches-list">
          {filtered.map(mission => (
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

const mapStateToProps = state => ({
  missions: state.launches,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterSuccess: success => dispatch(filterSuccess(success)),
  fetchData: () => dispatch(fetchData()),
});


MissionList.propTypes = {
  fetchData: PropTypes.func,
  filterSuccess: PropTypes.func,
  missions: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};

MissionList.defaultProps = {
  fetchData: () => { },
  filterSuccess: () => { },
  missions: {},
  filter: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MissionList);
