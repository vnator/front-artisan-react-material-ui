import { counterReducer } from '../pages/Counter/redux/reducer';
import { addressReducer } from '../pages/Address/redux/reducer';
import { toastReducer } from '../modules/Toast/redux/reducer';
import { navReducer } from '../modules/Nav/redux/reducer';

const rootReducer = Object.freeze({
  address: addressReducer,
  counter: counterReducer,
  toast: toastReducer,
  nav: navReducer,
});

export { rootReducer };
