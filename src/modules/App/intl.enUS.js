import { ERROR } from '../../const/errors';

const { TYPE, CODE } = ERROR;

const app_enUS = {
  paragraph:
    'Edite <code>src/modules/App/App.js</code> e salve para recarregar. <extern>Aprenda React</extern>',
  error: {
    [TYPE.INPUT]: {
      [CODE.A01]: `${TYPE.INPUT}-${CODE.A01}: Type a valid e-mail`,
    },
    [TYPE.AUTH]: {
      [CODE.A01]: `${TYPE.AUTH}-${CODE.A01}: User not authenticated`,
    },
    [TYPE.CRASH]: {
      [CODE.A01]: `${TYPE.CRASH}-${CODE.A01}: Invalid street name`,
    },
    [TYPE.FETCH]: {
      [CODE.A01]: `${TYPE.FETCH}-${CODE.A01}: User with id: {user} don't found`,
      [CODE.A02]: `${TYPE.FETCH}-${CODE.A02}: User with e-mail: {user} don't found`,
      [CODE.A03]: `${TYPE.FETCH}-${CODE.A03}: User {user} don't registred`,
    },
  },
};

export { app_enUS };
