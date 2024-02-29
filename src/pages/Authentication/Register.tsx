import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VisuallyHiddenInput from '../../components/Styles/VisuallyHiddenInput';
import { useInputValidation, useFileHandler } from '6pp';
import { ChangeEvent } from 'react';

type Props = {
  toggleLogin: () => void;
  usernameValidation: {
    value: '';
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    error: string;
  };
  passwordValidation: {
    error: string;
    value: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

const Register = ({
  toggleLogin,
  usernameValidation,
  passwordValidation,
}: Props) => {
  const nameValidation = useInputValidation('');
  const bioValidation = useInputValidation('');
  const avatar = useFileHandler('single');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Typography variant='h5'>
      <form
        style={{ width: '100%', marginTop: '1rem' }}
        onSubmit={handleRegister}
      >
        <Stack position={'relative'} width={'10rem'} margin={'auto'}>
          <Avatar
            sx={{
              width: '10rem',
              height: '10rem',
              objectFit: 'contain',
            }}
            src={avatar.preview?.toString()}
          />
          {avatar.error && (
            <Typography variant='caption' color='error' m={'1rem'}></Typography>
          )}
          <IconButton
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0,0.5)',
              ':hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            component='label'
          >
            <>
              <CameraAltIcon />
              <VisuallyHiddenInput
                type='file'
                onChange={avatar.changeHandler}
              />
            </>
          </IconButton>
        </Stack>
        <TextField
          fullWidth
          required
          label='Name'
          margin='normal'
          variant='outlined'
          value={nameValidation.value}
          onChange={nameValidation.changeHandler}
        />{' '}
        {nameValidation.error && (
          <Typography variant='caption' color='error'>
            {nameValidation.error}
          </Typography>
        )}
        <TextField
          fullWidth
          required
          label='Bio'
          margin='normal'
          variant='outlined'
          value={bioValidation.value}
          onChange={bioValidation.changeHandler}
        />{' '}
        {bioValidation.error && (
          <Typography variant='caption' color='error'>
            {bioValidation.error}
          </Typography>
        )}
        <TextField
          fullWidth
          required
          label='Username'
          margin='normal'
          variant='outlined'
          value={usernameValidation.value}
          onChange={usernameValidation.changeHandler}
        />
        {usernameValidation.error && (
          <Typography variant='caption' color='error'>
            {usernameValidation.error}
          </Typography>
        )}
        <TextField
          fullWidth
          required
          label='Password'
          type='password'
          margin='normal'
          variant='outlined'
          value={passwordValidation.value}
          onChange={passwordValidation.changeHandler}
        />{' '}
        {passwordValidation.error && (
          <Typography variant='caption' color='error'>
            {passwordValidation.error}
          </Typography>
        )}
        <Button
          sx={{ marginTop: '1rem' }}
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
        >
          Sign Up
        </Button>
        <Typography textAlign={'center'} m={'1rem'}>
          OR
        </Typography>{' '}
        <Button
          sx={{ marginTop: '1rem' }}
          variant='text'
          fullWidth
          onClick={toggleLogin}
        >
          sign In Instead
        </Button>
      </form>
    </Typography>
  );
};

export default Register;
