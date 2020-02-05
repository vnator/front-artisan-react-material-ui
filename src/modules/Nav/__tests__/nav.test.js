import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import { Nav, navTo } from '../Nav';
import { mountWithIntl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('Nav', () => {
  it('Snapshot', () => {
    const store = mockStore({
      nav: { active: false },
    });

    const header = mountWithIntl(
      <Provider store={store}>
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      </Provider>,
    );
    expect(header).toMatchSnapshot();
  });
});

describe('navTo', () => {
  it('redirect with navTo Clojure', () => {
    const push = spy();
    const close = spy();

    const path = 'any-path';
    const goTo = navTo(push, close);

    goTo(path);

    expect(push.calledWith(path)).toBeTruthy();
    expect(close.calledOnce).toBeTruthy();
  });
});
