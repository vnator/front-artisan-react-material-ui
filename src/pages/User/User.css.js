import React from 'react';
import { styled, Fab, TextField } from '@material-ui/core';

const UserContainer = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: theme.spacing(12),
}));

const Form = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))({
  display: 'flex',
  width: 400,
  height: '100%',
  flexDirection: 'column',
});

const Input = styled(TextField)(props => ({
  marginBottom: props.theme.spacing(2),
}));

const BtnBack = styled(Fab)(props => ({
  position: 'fixed',
  left: props.theme.spacing(3),
  bottom: props.theme.spacing(3),
}));

export { UserContainer, Form, Input, BtnBack };
