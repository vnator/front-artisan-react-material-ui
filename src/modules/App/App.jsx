import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  makeStyles,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { theme } from '../../theme';
import { Counter } from '../../pages/Counter/Counter';
import { Address } from '../../pages/Address';
import { Header } from '../Header/Header';
import { MAIN_ROUTES } from '../../const/routes';
import { UserList } from '../../pages/UserList/UserList';
import { User } from '../../pages/User';
import { Toast } from '../../modules/Toast/Toast';
import { Nav } from '../Nav/Nav';
import { Container, Typography, Link, Paper } from '@material-ui/core';

const useStyles = makeStyles((props) => ({
  app: {
    textAlign: 'center',
    background: props.palette.grey['200'],
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    marginTop: props.spacing(12),
    marginBottom: props.spacing(12),
  },
  message: {
    padding: `${props.spacing(4)}px 0`,
  },
}));

const App = () => {
  const { formatMessage } = useIntl();
  const customTheme = responsiveFontSizes(createMuiTheme(theme));
  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.app}>
        <Header />
        <Container className={classes.container}>
          <Paper elevation={4}>
            <Typography
              className={classes.message}
              color="textPrimary"
              variant="body1">
              {formatMessage(
                {
                  id: 'app.paragraph',
                },
                {
                  extern: (str) => (
                    <Link
                      key={str}
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer">
                      {str}
                    </Link>
                  ),
                  code: (str) => <code key={str}>{str}</code>,
                },
              )}
            </Typography>
            <Router>
              <Nav />
              <Switch>
                <Route exact path={MAIN_ROUTES.MAIN}>
                  <Counter />
                </Route>
                <Route path={MAIN_ROUTES.ADDRESS}>
                  <Address />
                </Route>
                <Route path={MAIN_ROUTES.USER_LIST}>
                  <UserList />
                </Route>
                <Route path={MAIN_ROUTES.USER()}>
                  <User />
                </Route>
              </Switch>
            </Router>
          </Paper>
          <Toast />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export { App };
