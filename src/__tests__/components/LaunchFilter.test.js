import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import LaunchFilter from '../../components/LaunchFilter';

describe('LaunchFilter', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LaunchFilter />);
    expect(component).toMatchSnapshot();
  });
});

describe('Test that 3 selects renders', () => {
  test('renders filter: launch sucess', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#sucess').textContent).toBe('AllYesNoPending');
  });

  test('renders filter: year success', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#Date').type).toBe('select-one');
  });

  test('renders filter: launch site', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LaunchFilter />, div);
    expect(div.querySelector('#Location').type).toBe('select-one');
  });
});
