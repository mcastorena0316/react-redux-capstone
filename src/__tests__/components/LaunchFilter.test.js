import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import LaunchFilter from '../../components/LaunchFilter';

describe('LaunchFilter', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LaunchFilter />);
    expect(component).toMatchSnapshot();
  });
});

describe('Test that 3 selects renders', () => {
  test('renders filter by launch sucess', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#sucess').type).toBe('select-one');
    expect(div.querySelector('#sucess').textContent).toBe('AllYesNoPending');
  });
  test('renders filter by year success', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#Date').type).toBe('select-one');
    expect(div.querySelector('#Date').textContent).toBe('All20202019201820172016201520142013201220102009200820072006');
  });

  test('renders filter by launch site', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#Location').type).toBe('select-one');
  });
});
