import { palette } from './palette';
import { transitions } from './transitions';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { zIndex } from './zIndex';
import { cool } from '../utils/cool';

const theme = cool({
  palette,
  typography,
  breakpoints,
  zIndex,
  transitions,
});

export { theme };
