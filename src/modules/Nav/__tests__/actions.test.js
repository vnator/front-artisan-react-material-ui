import { nav } from '../redux/types';
import { setNavActive } from '../redux/actions';

describe('Nav Action', () => {
  it('setNavActive with true', () => {
    const val = true;
    const result = setNavActive(val);

    expect(result).toEqual({
      type: nav.SET_ACTIVE,
      payload: val,
    });
  });

  it('setNavActive with false', () => {
    const val = false;
    const result = setNavActive(val);

    expect(result).toEqual({
      type: nav.SET_ACTIVE,
      payload: val,
    });
  });
});
