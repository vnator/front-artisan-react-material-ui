import React from 'react';
import Type from 'prop-types';

import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';

import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowLeft,
  ArrowRight,
  EditOutlined,
} from '@material-ui/icons';

import { MAIN_ROUTES } from '../../const/routes';
import { SORT_FIELD } from '../../const/userListParams';
import { USER } from '../../queries/user';
import { usePagination } from './usePagination';
import { useStyles } from './UserList.css';
import {
  Typography,
  Button,
  IconButton,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
} from '@material-ui/core';

import {
  Table,
  TabContainer,
  Head,
  Footer,
  FooterRow,
  Cell,
} from '../../components/Table.css';

const HeadCell = ({ field, sortField, event }) => {
  const { formatMessage } = useIntl();

  return (
    <Head>
      <Button
        onClick={() => event(field)}
        endIcon={sortField === field ? <ArrowDropDown /> : <ArrowDropUp />}>
        {formatMessage({
          id: `users.list.${field}`,
        })}
      </Button>
    </Head>
  );
};

const UserList = () => {
  const history = useHistory();
  const classes = useStyles();
  const [pag, { nextPage, prevPage, orderBy }] = usePagination(SORT_FIELD.NAME);

  const { formatMessage } = useIntl();

  const { data } = useQuery(USER.GET_USER_LIST, {
    variables: pag.params,
  });

  return (
    <div>
      <Typography color="primary" variant="h4" className={classes.title}>
        {formatMessage({
          id: 'users.title',
        })}
      </Typography>

      <TabContainer>
        <Table>
          <TableHead>
            <TableRow>
              {Object.values(SORT_FIELD).map((val) => (
                <HeadCell
                  field={val}
                  sortField={pag.params.sortField}
                  event={orderBy}
                />
              ))}
              <Head size="small" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell size="small">{user.name}</TableCell>
                  <TableCell size="small">{user.email}</TableCell>
                  <Cell size="small">
                    <Tooltip
                      title={formatMessage({ id: 'users.edit' })}
                      aria-label={formatMessage({ id: 'users.edit' })}>
                      <IconButton
                        onClick={() => history.push(MAIN_ROUTES.USER(user.id))}>
                        <EditOutlined />
                      </IconButton>
                    </Tooltip>
                  </Cell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TabContainer>
      <Footer>
        <FooterRow>
          <div>
            <IconButton onClick={prevPage}>
              <ArrowLeft />
            </IconButton>
            <strong>{pag.page}</strong>
            <IconButton onClick={nextPage}>
              <ArrowRight />
            </IconButton>
          </div>

          <div className={classes.newUser}>
            <Button
              size="large"
              color="primary"
              onClick={() => history.push(MAIN_ROUTES.USER(0))}>
              {formatMessage({
                id: 'users.newUser',
              })}
            </Button>
          </div>
        </FooterRow>
      </Footer>
    </div>
  );
};

HeadCell.propTypes = {
  field: Type.string.isRequired,
  sortField: Type.string.isRequired,
  event: Type.func.isRequired,
};

export { UserList };
