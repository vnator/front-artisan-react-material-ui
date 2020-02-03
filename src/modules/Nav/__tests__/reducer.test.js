import { nav } from '../redux/types';
import { navReducer, _initialState } from '../redux/reducer';

describe('Toast Reducer', () => {
  it('default state', () => {
    expect(navReducer(undefined, {})).toEqual(_initialState);
  });

  it('setNavActive', () => {
    const actionCreate = {
      type: nav.SET_ACTIVE,
      payload: true,
    };

    expect(navReducer(actionCreate, {})).toEqual(actionCreate);
  });
});
