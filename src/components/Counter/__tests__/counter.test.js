import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Counter } from '../Counter';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe('Counter', () => {
  it('Snapshot', () => {
    const store = mockStore({
      couter: 0,
    });

    const counter = mount(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(counter).toMatchSnapshot();
  });
});
