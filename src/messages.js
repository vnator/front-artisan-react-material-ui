// pt-BR
import { app_ptBR } from './modules/App/intl.ptBR.js';
import { header_ptBR } from './modules/Header/intl.ptBR.js';
import { nav_ptBR } from './modules/Nav/intl.ptBR';
import { userList_ptBR } from './pages/UserList/intl.ptBR.js';
import { user_ptBR } from './pages/User/intl.ptBR.js';
import { address_ptBR } from './pages/Address/intl.ptBR.js';
import { counter_ptBR } from './pages/Counter/intl.ptBR.js';

// en-US
import { app_enUS } from './modules/App/intl.enUS.js';
import { header_enUS } from './modules/Header/intl.enUS.js';
import { nav_enUS } from './modules/Nav/intl.enUS';
import { userList_enUS } from './pages/UserList/intl.enUS.js';
import { user_enUS } from './pages/User/intl.enUS.js';
import { address_enUS } from './pages/Address/intl.enUS.js';
import { counter_enUS } from './pages/Counter/intl.enUS.js';

const messages = Object.freeze({
  'en-US': {
    app: app_enUS,
    header: header_enUS,
    nav: nav_enUS,
    users: userList_enUS,
    user: user_enUS,
    address: address_enUS,
    counter: counter_enUS,
  },
  'pt-BR': {
    app: app_ptBR,
    header: header_ptBR,
    nav: nav_ptBR,
    users: userList_ptBR,
    user: user_ptBR,
    address: address_ptBR,
    counter: counter_ptBR,
  },
});

export { messages };
