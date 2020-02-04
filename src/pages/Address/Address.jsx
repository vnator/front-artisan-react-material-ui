import React, { Component } from 'react';
import Type from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TableFooter,
  styled,
  Button,
  Paper,
  InputBase,
  TextField,
} from '@material-ui/core';

import { EditOutlined } from '@material-ui/icons';

import { el } from './element.selectors.js';
import { intlShape } from '../../utils/intlShape';

const StyledTabContainer = styled(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  margin: '40 0',
});

const StyledTable = styled(Table)({
  maxWidth: 'calc(100% - 80px)',
});

const StyledFooter = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: 40,
});

const StyledFooterRow = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% - 80px)',
});

const StyledInput = styled(TextField)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  height: 53.3,
  width: 160,
  borderRadius: 0,
});

class Address extends Component {
  // selector example usage
  state = {
    selected: '',
    newAddress: '',
    newCity: '',
  };

  updateStreet = () =>
    this.props.setStreet({
      value: this.state.newAddress,
      index: this.state.selected,
    });

  render() {
    const { formatMessage } = this.props.intl;
    const { address } = this.props;

    return (
      <div>
        <StyledTabContainer>
          <StyledTable aria-label="simple table" padding="none">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>city</TableCell>
                <TableCell>street</TableCell>
                <TableCell>number</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(address).map(([key, val]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{val.city}</TableCell>
                  <TableCell>{val.street}</TableCell>
                  <TableCell>{val.number}</TableCell>
                  <TableCell>
                    <IconButton
                      id={el.btnSelectStreet}
                      onClick={() => {
                        this.setState(prev => ({
                          ...prev,
                          selected: key,
                          newAddress: val.street,
                        }));
                      }}>
                      <EditOutlined />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTabContainer>

        <StyledFooter>
          <StyledFooterRow>
            <StyledInput
              id={el.inputUpdateStreet}
              value={this.state.newAddress}
              onChange={e => this.setState({ newAddress: e.target.value })}
              variant="filled"
              label={
                this.state.selected
                  ? Object.keys(this.props.address).find(
                      x => x === this.state.selected,
                    )
                  : formatMessage({ id: 'address.street' })
              }
              placeholder={formatMessage({
                id: 'address.placeholder.street',
              })}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <StyledButton
              variant="contained"
              color="primary"
              id={el.btnUpdateStreet}
              disableElevation
              onClick={this.updateStreet}>
              {formatMessage({ id: 'address.submit' })}
            </StyledButton>
          </StyledFooterRow>
          <StyledFooterRow>
            <StyledInput
              variant="filled"
              label={formatMessage({ id: 'address.city' })}
              id={el.inputUpdateCity}
              value={this.state.newCity}
              placeholder={formatMessage({
                id: 'address.placeholder.city',
              })}
              onChange={e => this.setState({ newCity: e.target.value })}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <StyledButton
              variant="contained"
              color="primary"
              id={el.btnUpdateCity}
              disableElevation
              onClick={() => this.props.setAddressCity(this.state.newCity)}>
              {formatMessage({ id: 'address.submit' })}
            </StyledButton>
          </StyledFooterRow>
        </StyledFooter>
      </div>
    );
  }
}

Address.propTypes = {
  intl: Type.shape(intlShape).isRequired,
  setStreet: Type.func.isRequired,
  setAddressCity: Type.func.isRequired,
  address: Type.objectOf(
    Type.shape({
      city: Type.string,
      street: Type.string,
      number: Type.string,
    }),
  ).isRequired,
};

export { Address };
