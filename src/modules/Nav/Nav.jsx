import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@material-ui/core';

import { GroupOutlined, HomeOutlined, AppsOutlined } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { MAIN_ROUTES } from '../../const/routes';
import { useSelector, useDispatch } from 'react-redux';
import { setNavActive } from './redux/actions';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const navTo = (push, after) => to => {
  push(to);
  after();
};

const Nav = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const active = useSelector(({ nav }) => nav.active);

  const close = () => dispatch(setNavActive(false));

  const goTo = navTo(history.push, close);

  return (
    <Drawer anchor="left" open={active} onClose={close}>
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography color="primary" variant="h6">
                {formatMessage({
                  id: 'nav.title',
                })}
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button onClick={() => goTo(MAIN_ROUTES.MAIN)}>
            <ListItemIcon>
              <AppsOutlined color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={formatMessage({
                id: 'nav.counter',
              })}
            />
          </ListItem>
          <Divider />

          <ListItem button onClick={() => goTo(MAIN_ROUTES.ADDRESS)}>
            <ListItemIcon>
              <HomeOutlined color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={formatMessage({
                id: 'nav.address',
              })}
            />
          </ListItem>
          <Divider />

          <ListItem button onClick={() => goTo(MAIN_ROUTES.USER_LIST)}>
            <ListItemIcon>
              <GroupOutlined color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={formatMessage({
                id: 'nav.users',
              })}
            />
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

export { Nav, navTo };
