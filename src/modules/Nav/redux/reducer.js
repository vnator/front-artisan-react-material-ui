import { createReducer, createAction } from '@reduxjs/toolkit';
import { assocPath } from 'ramda';
import { nav } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH ACTION CREATOR DISPATCH
const setNavActive = createAction(nav.SET_ACTIVE);

// DECLARE INITIAL STATE OF APP REDUCER
const _initialState = {
  active: false,
};

// DECLARE APP REDUCER
const navReducer = createReducer(_initialState, {
  [setNavActive]: (state, action) =>
    assocPath(['active'], action.payload, state),
});

export { navReducer, _initialState };
