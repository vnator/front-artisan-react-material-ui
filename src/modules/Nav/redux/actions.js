import { createAction } from '@reduxjs/toolkit';
import { nav } from './types';

const _setNavActive = value => {
  return { payload: value };
};

const setNavActive = createAction(nav.SET_ACTIVE, _setNavActive);

export { setNavActive };
