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
          {mission.launch_sucess && <li>Launch sucess : yes</li> }
          {!mission.launch_sucess && <li>Launch sucess : no</li> }


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
