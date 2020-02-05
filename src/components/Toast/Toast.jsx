import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, makeStyles } from '@material-ui/core';
import { SnackbarContent } from '@material-ui/core';
import { toggleActive } from './redux/actions';

const useStyle = makeStyles(props => ({
  toast: {
    background: props.palette.error.main,
    color: props.palette.error.contrastText,
    width: 400,
    textAlign: 'right',
  },
}));

const Toast = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { active, message } = useSelector(state => state.toast);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(toggleActive());
      }, 3000);
    }
  }, [active, dispatch]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={active}>
      <SnackbarContent className={classes.toast} message={message} />
    </Snackbar>
  );
};

export { Toast };
