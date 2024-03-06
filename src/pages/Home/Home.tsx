import { Box, Typography } from '@mui/material';
import AppLayout from '../Layout/AppLayout';
import { grayColor } from '../../constants/colors';

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={'100%'}>
      <Typography p={'2rem'} variant='h5' textAlign={'center'}>
        Select a friend to chat with
      </Typography>
    </Box>
  );
};

const HomeHOC = AppLayout()(Home);

export default HomeHOC;
