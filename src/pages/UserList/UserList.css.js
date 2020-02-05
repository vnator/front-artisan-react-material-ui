import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => ({
  userList: {},
  title: {
    marginBottom: spacing(4),
  },
  newUser: {
    margin: spacing(2),
  },
}));

export { useStyles };
