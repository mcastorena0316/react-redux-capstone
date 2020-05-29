import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchOneMission } from '../actions/index';


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
    let urlEmbed2;
    const { mission } = this.props;
    if (mission.links) {
      const urlVideo = mission.links.video_link;
      const urlEmbed = urlVideo.replace('watch?', 'embed/');
      urlEmbed2 = urlEmbed.replace('v=', '');
    }
    return (urlEmbed2);
  }

  render() {
    const { mission } = this.props;
    console.log(mission);
    return (
      <div className="mission-div">
        <ul>
          <li>
            {' '}
            Name:
            { mission.mission_name}
          </li>
          <li>
            {' '}
            Details:
            { mission.details}
          </li>
          <li>
            {' '}
            Launch Year:
            { mission.launch_year}
          </li>
          <li>
            {' '}
            Launch Date:
            { mission.launch_date_utc}
          </li>
          {mission.launch_site && (
          <li>
            Launch site:
            {mission.launch_site.site_name}
          </li>
          )}

          {mission.rocket && (
          <li>
            Rocket name:
            {mission.rocket.rocket_name}
          </li>
          )}
          {mission.rocket && (
          <li>
            Rocket type:
            {mission.rocket.rocket_type}
          </li>
          )}

          {mission.launch_sucess && <li>Launch sucess : yes</li> }
          {!mission.launch_sucess && <li>Launch sucess : no</li> }
          {mission.launch_failure_details && (
          <li>
            Reasons of failure:
            {mission.launch_failure_details.reason}
          </li>
          ) }

          {mission.links && (
          <li>
            More information:
            <a target="_blank" rel="noreferrer" href={mission.links.wikipedia}>{mission.links.wikipedia}</a>
          </li>
          )}
          {mission.links && (
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="300"
            height="200"
            src={this.convertUrl()}
          />
          )}

        </ul>


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
    launch_sucess: PropTypes.string,
    links: PropTypes.shape({
      video_link: PropTypes.string,
      wikipedia: PropTypes.string,
    }),
    launch_site: PropTypes.shape({
      site_name: PropTypes.string,
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
