import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Toast } from '../Toast';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('Toast', () => {
  it('Snapshot', () => {
    const store = mockStore({
      toast: {
        message: '',
        active: false,
      },
    });

    const toast = mount(
      <Provider store={store}>
        <Toast />
      </Provider>,
    );

    expect(toast).toMatchSnapshot();
  });

  it('auto hide', done => {
    const toast = {
      message: 'any message',
      active: true,
    };

    const store = mockStore({
      toast,
    });

    store.dispatch = spy();

    const toastComponent = mount(
      <Provider store={store}>
        <Toast />
      </Provider>,
    );

    setTimeout(() => {
      expect(store.dispatch.calledOnce).toBeTruthy();
      done();
    }, 3000);
  });
});
