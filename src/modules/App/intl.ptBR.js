import { ERROR } from '../../const/errors';

const { TYPE, CODE } = ERROR;

const app_ptBR = {
  paragraph:
    'Edite <code>src/modules/App/App.js</code> e salve para recarregar. <extern>Aprenda React</extern>',
  error: {
    [TYPE.INPUT]: {
      [CODE.A01]: `${TYPE.INPUT}-${CODE.A01}: Digite um email valido`,
    },
    [TYPE.AUTH]: {
      [CODE.A01]: `${TYPE.AUTH}-${CODE.A01}: Usuário não autenticado`,
    },
    [TYPE.CRASH]: {
      [CODE.A01]: `${TYPE.CRASH}-${CODE.A01}: nome de rua inválido`,
    },
    [TYPE.FETCH]: {
      [CODE.A01]: `${TYPE.FETCH}-${CODE.A01}: Usuário de id: {user} não encontrado`,
      [CODE.A02]: `${TYPE.FETCH}-${CODE.A02}: Usuário de email {user} não encontrado`,
      [CODE.A03]: `${TYPE.FETCH}-${CODE.A03}: Usuário {user} não registrado`,
    },
  },
};

export { app_ptBR };
