import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useIntl } from 'react-intl';

import { setNavActive } from '../Nav/redux/actions';

const Header = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  return (
    <header>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={() => dispatch(setNavActive(true))}
            edge="start"
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {formatMessage({
              id: 'header.title',
            })}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export { Header };
