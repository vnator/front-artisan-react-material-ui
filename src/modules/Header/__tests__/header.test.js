import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../Header';
import { mountWithIntl } from '../../../utils/enzymeHelper';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('Header', () => {
  it('Snapshot', () => {
    const store = mockStore({
      nav: { active: false },
    });

    const header = mountWithIntl(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(header).toMatchSnapshot();
  });
});
