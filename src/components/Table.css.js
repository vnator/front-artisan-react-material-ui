import React from 'react';

import {
  Table as MUITable,
  TableCell,
  TableContainer,
  styled,
} from '@material-ui/core';

const TabContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  margin: '40 0',
});

const Table = styled(MUITable)({
  maxWidth: 'calc(100% - 80px)',
});

const Footer = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: 40,
});

const FooterRow = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% - 80px)',
  border: `1px solid ${props.theme.palette.primary.main}`,
  borderTop: 0,
}));
const Cell = styled(TableCell)(props => ({
  width: 40,
  background: props.theme.palette.grey['200'],
}));

const Head = styled(TableCell)(props => ({
  backgroundColor: props.theme.palette.secondary.main,
  color: props.theme.palette.secondary.contrastText,
  textTransform: 'uppercase',
}));

export { Cell, FooterRow, Footer, Table, TabContainer, Head };
