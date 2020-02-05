import React from 'react';
import { IconButton, Button, Typography, makeStyles } from '@material-ui/core';
import {
  RemoveCircleOutlineOutlined,
  AddCircleOutlineOutlined,
} from '@material-ui/icons';

import { useSelector, useDispatch } from 'react-redux';

import { Title } from '../../components/Title.css';

import { setCounter } from './redux/actions.js';
import { setCounterOneByOne } from './redux/thunks.js';
import { el } from './element.selectors';
import { useIntl } from 'react-intl';

const useStyles = makeStyles({
  counter: {
    margin: '50px 0',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  box: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Counter = () => {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={classes.counter}>
      <Title variant="h4" color="primary">
        {formatMessage({ id: 'counter.title' })}
      </Title>
      <Button
        color="primary"
        variant="outlined"
        id={el.oneByOne}
        onClick={() => dispatch(setCounterOneByOne())}>
        {formatMessage({ id: 'counter.button' })}
      </Button>
      <div className={classes.box}>
        <IconButton
          color="primary"
          variant="outlined"
          id={el.minus}
          onClick={() => dispatch(setCounter(counter - 1))}>
          <RemoveCircleOutlineOutlined />
        </IconButton>
        <Typography variant="subtitle2" color="secondary">
          {counter}
        </Typography>
        <IconButton
          color="primary"
          variant="outlined"
          id={el.plus}
          onClick={() => dispatch(setCounter(counter + 1))}>
          <AddCircleOutlineOutlined />
        </IconButton>
      </div>
    </div>
  );
};

export { Counter };
