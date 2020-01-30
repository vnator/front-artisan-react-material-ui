import { h1 } from './h1';
import { h2 } from './h2';
import { h3 } from './h3';
import { h4 } from './h4';
import { h5 } from './h5';
import { h6 } from './h6';
import { subtitle1 } from './subtitle1';
import { subtitle2 } from './subtitle2';
import { body1 } from './body1';
import { body2 } from './body2';
import { caption } from './caption';
import { overline } from './overline';
import { button } from './button';

const defaultConfig = {
  htmlFontSize: 16,
  fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const typography = Object.freeze({
  ...defaultConfig,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline,
});

export { typography, defaultConfig };
