import React, { Component } from 'react';
import Type from 'prop-types';

import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { checkEmail } from '../../utils/validate';
import { ERROR } from '../../const/errors';
import { intlShape } from '../../utils/intlShape';
import { Title } from '../../components/Title.css';

import { UserContainer, Form, Input, BtnBack } from './User.css';
import { el } from './element.selectors';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this._updateUser(props.data.user),
    };
  }

  _updateUser = (user) =>
    user
      ? {
          name: user.name,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
        }
      : {
          name: '',
          email: '',
          dateOfBirth: '',
          gender: 'MALE',
        };

  componentDidUpdate(prevProps) {
    if (!prevProps.data.user && this.props.data.user) {
      this.setState(this._updateUser(this.props.data.user));
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  defineType = (name) => {
    if (name === 'dateOfBirth') {
      return 'date';
    } else if (name === 'email') {
      return 'email';
    }
  };

  submit = (e, form) => {
    e.preventDefault();

    if (checkEmail(form.email)) {
      this.props.mutate({
        variables: {
          ...form,
        },
      });
    } else {
      this.props.triggerToast(
        this.props.intl.formatMessage({
          id: `app.error.${ERROR.TYPE.INPUT}.${ERROR.CODE.A01}`,
        }),
      );
    }
  };

  render() {
    const { formatMessage } = this.props.intl;

    return this.props.data.loading ? (
      'carregando'
    ) : (
      <UserContainer>
        <BtnBack
          id={el.btnGoBack}
          color="secondary"
          variant="extended"
          onClick={this.props.history.goBack}>
          <ArrowBack />
          {formatMessage({
            id: 'user.back',
          })}
        </BtnBack>
        <Title color="primary" variant="h4">
          {formatMessage({
            id: 'user.title',
          })}
        </Title>
        <Form>
          {Object.entries(this.state).map(([key, val]) => (
            <Input
              variant="outlined"
              key={key}
              name={key}
              value={val}
              label={formatMessage({ id: `user.form.${key}.label` })}
              onChange={this.onChange}
              placeholder={formatMessage({
                id: `user.form.${key}.placeholder`,
              })}
              type={this.defineType(key)}
              disabled={key === 'gender'}
              InputLabelProps={
                this.defineType(key) === 'date'
                  ? {
                      shrink: true,
                    }
                  : ''
              }
            />
          ))}
          <Button
            id={el.btnSubmit}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
            onClick={(e) => this.submit(e, this.state)}>
            {formatMessage({
              id: 'user.submit',
            })}
          </Button>
        </Form>
      </UserContainer>
    );
  }
}

User.propTypes = {
  mutate: Type.func.isRequired,
  triggerToast: Type.func.isRequired,
  intl: Type.shape(intlShape).isRequired,
  history: Type.shape({
    goBack: Type.func,
  }).isRequired,
  data: Type.shape({
    loading: Type.bool,
    user: Type.objectOf(Type.string),
    refetch: Type.func,
    error: Type.string,
  }).isRequired,
};

export { User };
