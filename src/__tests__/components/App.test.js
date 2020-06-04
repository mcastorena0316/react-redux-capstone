import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../../components/App';
import Mission from '../../containers/Mission';
import About from '../../components/About';
import '../../setupTests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
});

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App />);
      const component = wrapper.dive();
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

describe('test of paths', () => {
  test('valid path should redirect to about', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <Provider store={store}>
          <About />
        </Provider>

      </MemoryRouter>,
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });

  test('valid path should redirect to mission id,', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/mission/1']}>
        <Provider store={store}>
          <Mission match={{ params: { ID: 1 } }} />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(Mission)).toHaveLength(1);
  });
});
