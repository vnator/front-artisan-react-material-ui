import React from 'react';

import {
  Table as MUITable,
  TableCell,
  TableContainer,
  styled,
  Button as MUIButton,
  TextField,
  Typography,
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

const Input = styled(TextField)({
  flexGrow: 1,
});

const Button = styled(MUIButton)({
  height: 53.3,
  width: 160,
  borderRadius: 0,
});

const Cell = styled(TableCell)(props => ({
  width: 40,
  background: props.theme.palette.grey['200'],
}));

const Head = styled(TableCell)(props => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.common.white,
}));

const Title = styled(Typography)({
  marginBottom: 40,
});

export {
  Cell,
  Button,
  Input,
  FooterRow,
  Footer,
  Table,
  TabContainer,
  Head,
  Title,
};
