import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { mountWithIntl } from '../../../utils/enzymeHelper';
import { Counter } from '../Counter';
import { el } from '../element.selectors';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe('Counter', () => {
  let shallow;

  beforeEach(() => {
    // This is Mocha; in Jest, use beforeAll
    shallow = createShallow();
  });

  it('Snapshot', () => {
    const store = mockStore({
      couter: 0,
    });

    const counter = mountWithIntl(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(counter.children()).toMatchSnapshot();
  });

  it('onClick Add', () => {
    const initialState = 23;

    const store = mockStore({
      counter: initialState,
    });

    store.dispatch = spy();

    const counter = mountWithIntl(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    counter.find(`#${el.plus}`).first().simulate('click');

    expect(store.dispatch.args[0][0].payload).toBe(initialState + 1);
  });

  it('onClick minus', () => {
    const initialState = 21;

    const store = mockStore({
      counter: initialState,
    });

    store.dispatch = spy();

    const counter = mountWithIntl(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    counter.find(`#${el.minus}`).first().simulate('click');

    expect(store.dispatch.args[0][0].payload).toBe(initialState - 1);
  });

  it('onClick OneByOne', () => {
    const store = mockStore({
      counter: 0,
    });

    store.dispatch = spy();

    const counter = mountWithIntl(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    counter.find(`#${el.oneByOne}`).first().simulate('click');

    expect(store.dispatch.calledOnce).toBeTruthy();
  });
});
