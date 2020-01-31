import { common } from './common';
import { primary } from './primary';
import { secondary } from './secondary';
import { error } from './error';
import { warning } from './warning';
import { info } from './info';
import { success } from './success';
import { grey } from './grey';
import { text } from './text';
import { action } from './action';

const palette = {
  type: 'light',
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
  common,
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  grey,
  text,
  action,
};

export { palette };
