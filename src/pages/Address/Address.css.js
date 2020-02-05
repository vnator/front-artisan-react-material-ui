import { styled, Button as MUIButton, TextField } from '@material-ui/core';

const Input = styled(TextField)({
  flexGrow: 1,
});

const Button = styled(MUIButton)({
  height: 53.3,
  width: 160,
  borderRadius: 0,
});

export { Button, Input };
