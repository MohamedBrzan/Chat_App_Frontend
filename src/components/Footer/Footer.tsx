import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography
      variant='body1'
      bgcolor={'primary.dark'}
      textAlign={'center'}
      color={'white'}
    >
      Powered by Mohamed Mahmoud @ {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
