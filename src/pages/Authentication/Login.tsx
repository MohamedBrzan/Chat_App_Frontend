import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useInputValidation, useStrongPassword } from '6pp';
import Register from './Register';
import { usernameValidator } from '../../utils/Validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const toggleLogin = () => setIsLogin(!isLogin);

  const usernameValidation = useInputValidation('', usernameValidator);
  const passwordValidation = useStrongPassword();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(200, 200, 200, 0.5), rgb(33 43 97))',
      }}
    >
      <Container
        component={'main'}
        maxWidth='xs'
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLogin ? (
            <Typography variant='h5'>
              <form onSubmit={handleLogin}>
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
                />
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
                  Login
                </Button>
                <Typography textAlign={'center'} m={'1rem'}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: '1rem' }}
                  variant='text'
                  fullWidth
                  onClick={toggleLogin}
                >
                  sign Up Instead
                </Button>
              </form>
            </Typography>
          ) : (
            <Register
              toggleLogin={toggleLogin}
              usernameValidation={usernameValidation}
              passwordValidation={passwordValidation}
            />
          )}
        </Paper>
      </Container>
    </section>
  );
};

export default Login;
