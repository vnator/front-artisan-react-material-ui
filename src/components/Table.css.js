import React from 'react';

import {
  Table as MUITable,
  TableCell,
  TableContainer,
  styled,
} from '@material-ui/core';

const TabContainer = styled(TableContainer)(props => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: props.theme.spacing(4),
  marginBottom: props.theme.spacing(4),
}));

const Table = styled(MUITable)(props => ({
  maxWidth: `calc(100% - ${props.theme.spacing(20)}px)`,
}));

const Footer = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))(props => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: props.theme.spacing(4),
}));

const FooterRow = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: `calc(100% - ${props.theme.spacing(20)}px)`,
  border: `1px solid ${props.theme.palette.primary.main}`,
  borderTop: 0,
}));
const Cell = styled(TableCell)(props => ({
  width: props.theme.spacing(4),
  background: props.theme.palette.grey['200'],
}));

const Head = styled(TableCell)(props => ({
  backgroundColor: props.theme.palette.secondary.main,
  color: props.theme.palette.secondary.contrastText,
  textTransform: 'uppercase',
}));

export { Cell, FooterRow, Footer, Table, TabContainer, Head };
