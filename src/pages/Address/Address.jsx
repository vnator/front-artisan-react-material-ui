import React, { Component } from 'react';
import Type from 'prop-types';
import { EditOutlined } from '@material-ui/icons';

import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from '@material-ui/core';

import {
  Table,
  TabContainer,
  Head,
  Footer,
  FooterRow,
  Cell,
} from '../../components/Table.css';
import { Title } from '../../components/Title.css';
import { intlShape } from '../../utils/intlShape';

import { Button, Input } from './Address.css';
import { el } from './element.selectors.js';

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
        <Title variant="h4" color="primary">
          {formatMessage({ id: 'address.title' })}
        </Title>
        <TabContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <Head size="medium">
                  {formatMessage({ id: 'address.head.id' })}
                </Head>
                <Head size="medium">
                  {formatMessage({ id: 'address.head.city' })}
                </Head>
                <Head size="medium">
                  {formatMessage({ id: 'address.head.street' })}
                </Head>
                <Head size="medium">
                  {formatMessage({ id: 'address.head.number' })}
                </Head>
                <Head size="medium"></Head>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(address).map(([key, val]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{val.city}</TableCell>
                  <TableCell>{val.street}</TableCell>
                  <TableCell>{val.number}</TableCell>
                  <Cell>
                    <IconButton
                      id={el.btnSelectStreet}
                      color="primary"
                      onClick={() => {
                        this.setState(prev => ({
                          ...prev,
                          selected: key,
                          newAddress: val.street,
                        }));
                      }}>
                      <EditOutlined />
                    </IconButton>
                  </Cell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabContainer>

        <Footer>
          <FooterRow>
            <Input
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
            <Button
              variant="contained"
              color="primary"
              id={el.btnUpdateStreet}
              disableElevation
              onClick={this.updateStreet}>
              {formatMessage({ id: 'address.submit' })}
            </Button>
          </FooterRow>
          <FooterRow>
            <Input
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
            <Button
              variant="contained"
              color="primary"
              id={el.btnUpdateCity}
              disableElevation
              onClick={() => this.props.setAddressCity(this.state.newCity)}>
              {formatMessage({ id: 'address.submit' })}
            </Button>
          </FooterRow>
        </Footer>
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
