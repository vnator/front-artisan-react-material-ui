import React from 'react';
import { useIntl } from 'react-intl';

import style from './Header.module.css';
import logo from '../../img/logo.png';

const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <header className={style.Header}>
      <div className={style.logo}>
        <img
          src={logo}
          className={style.logoImg}
          alt={formatMessage({
            id: 'header.logoAlt',
          })}
        />
      </div>
      <h1 className={style.title}>
        {formatMessage({
          id: 'header.title',
        })}
      </h1>
    </header>
  );
};

export { Header };
