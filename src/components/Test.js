import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

export class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <ul>
        {this.props.filter.map(el => (
          <li key={el.id}>{el.rocket_name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter.slice(0, 10),
  };
}

export default connect(
  mapStateToProps,
  { fetchData },
)(Test);
