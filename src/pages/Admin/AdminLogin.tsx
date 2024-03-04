import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { bgGradient } from '../../constants/colors';
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';

const isAdmin: boolean = true;

const AdminLogin = () => {
  const secretKey = useInputValidation('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (isAdmin) return <Navigate to={'/admin/dashboard'} />;

  return (
    <section
      style={{
        backgroundImage: bgGradient,
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
          <Typography variant='h5'>Admin Login</Typography>
          <form onSubmit={submitHandler}>
            <TextField
              fullWidth
              required
              label='Password'
              type='password'
              margin='normal'
              variant='outlined'
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            {secretKey.error && (
              <Typography variant='caption' color='error'>
                {secretKey.error}
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
          </form>
        </Paper>
      </Container>
    </section>
  );
};

export default AdminLogin;
