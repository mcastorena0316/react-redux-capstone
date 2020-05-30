import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchOneMission } from '../actions/index';
import Footer from '../components/Footer';
import './Mission.css';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: props.match.params.id,
    };
  }

  componentDidMount() {
    const { fetchOneMission } = this.props;
    const { ID } = this.state;
    fetchOneMission(ID);
  }

  convertUrl() {
    let urlVideo;
    const { mission } = this.props;
    if (mission.links) {
      urlVideo = mission.links.youtube_id;
    }
    return (urlVideo);
  }


  render() {
    const { mission } = this.props;
    return (
      <div className="mission-div">

        {mission.mission_name && (
        <h2>
          { mission.mission_name.toUpperCase()}
        </h2>
        )}
        <div className="mission-info-div">
          <ul className="mission-data">
            <li>
              <span>Details:</span>
              { mission.details}
            </li>
            <li>
              <span>Launch Year:</span>
              { mission.launch_year}
            </li>

            {mission.launch_date_utc && (
            <li>
              <span>Launch Date:</span>
              {mission.launch_date_utc.slice(0, mission.launch_date_utc.indexOf('T'))}
            </li>
            )}
            {mission.launch_site && (
            <li>
              <span>Launch site:</span>
              {mission.launch_site.site_name_long}
            </li>
            )}

            {mission.rocket && (
            <li>
              <span>Rocket name:</span>
              {mission.rocket.rocket_name}
            </li>
            )}
            {mission.rocket && (
            <li>
              <span>Rocket type:</span>
              {mission.rocket.rocket_type}
            </li>
            )}
            {mission.launch_success && (
            <li>
              <span>Launch sucess:</span>
              {' '}
              yes
            </li>
            ) }
            {mission.launch_success === false && (
            <li>
              <span>Launch sucess:</span>
              {' '}
              no
            </li>
            ) }
            {mission.launch_success === null && (
            <li>
              <span>Launch sucess:</span>
              {' '}
              Pending
            </li>
            ) }

            {mission.launch_failure_details && (
            <li>
              <span>Reasons of failure:</span>
              {mission.launch_failure_details.reason}
            </li>
            ) }

            {mission.links && (
            <li>
              <span>More information:</span>
              <a target="_blank" rel="noopener noreferrer" href={mission.links.wikipedia}><p>{mission.links.wikipedia}</p></a>
            </li>
            )}

          </ul>
          <div className="video-div">
            { mission.links && (
            <iframe
              id="SpaceX Video"
              title="Inline Frame Example"
              width="90%"
              height="60%"
              src={(this.convertUrl() === undefined || this.convertUrl() === null) ? 'https://www.youtube.com/embed/_yDZY5_u8FQ' : `https://www.youtube.com/embed/${this.convertUrl()}`}
            />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


Mission.propTypes = {
  fetchOneMission: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  mission: PropTypes.shape({
    details: PropTypes.string,
    launch_year: PropTypes.string,
    launch_date_utc: PropTypes.string,
    mission_name: PropTypes.string,
    launch_success: PropTypes.bool,
    links: PropTypes.shape({
      youtube_id: PropTypes.string,
      wikipedia: PropTypes.string,
    }),
    launch_site: PropTypes.shape({
      site_name_long: PropTypes.string,
    }),
    rocket: PropTypes.shape({
      rocket_name: PropTypes.string,
      rocket_type: PropTypes.string,
    }),
    launch_failure_details: PropTypes.shape({
      reason: PropTypes.string,
    }),

  }),


};

Mission.defaultProps = {
  fetchOneMission: () => { },
  mission: {},

};


function mapStateToProps(state) {
  return {
    mission: state.mission,
  };
}


export default connect(
  mapStateToProps,
  { fetchOneMission },
)(Mission);
