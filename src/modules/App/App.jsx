import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';

import style from './App.module.css';
import { theme } from '../../theme';
import { Counter } from '../../components/Counter/Counter';
import { Address } from '../../pages/Address';
import { Header } from '../Header/Header';
import { MAIN_ROUTES } from '../../const/routes';
import { UserList } from '../../pages/UserList/UserList';
import { User } from '../../pages/User';
import { Toast } from '../../components/Toast/Toast';
import { Nav } from '../Nav/Nav';

const App = () => {
  const { formatMessage } = useIntl();

  const customTheme = responsiveFontSizes(createMuiTheme(theme));

  return (
    <ThemeProvider theme={customTheme}>
      <div className={style.App}>
        <Header />
        <p className={style.paragraph}>
          {formatMessage(
            {
              id: 'app.paragraph',
            },
            {
              extern: str => (
                <a
                  key={str}
                  className={style.link}
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  {str}
                </a>
              ),
              code: str => (
                <code key={str} className={style.code}>
                  {str}
                </code>
              ),
            },
          )}
        </p>
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
        <Toast />
      </div>
    </ThemeProvider>
  );
};

export { App };
