import React from 'react';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useIntl } from 'react-intl';

import style from './Header.module.css';

const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <header className={style.Header}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
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
