import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { grayColor, matBlack } from '../../constants/colors';
import {
  Close as CloseIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Navigate, useLocation } from 'react-router-dom';
import { adminTabs } from './SideBarRoutes';
import LinkStyle from '../../components/Styles/LinkStyle';

type AdminLayoutType = {
  children: ReactNode;
};

type SideBarType = {
  w?: string | '100%';
};

const LinkComponent = styled(LinkStyle)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const SideBar = ({ w }: SideBarType) => {
  const location = useLocation();

  const logoutHandler = () => {};

  return (
    <Stack width={w} direction={'column'} p={'3rem'} spacing={'3rem'}>
      <Typography variant='h5' textTransform={'uppercase'}>
        Admin
      </Typography>
      <Stack spacing={'1rem'}>
        {adminTabs.map(({ name, path, icon }, index) => (
          <LinkComponent
            to={path}
            key={index}
            sx={
              location.pathname === path && {
                bgcolor: matBlack,
                color: 'white',
                ':hover': { color: grayColor },
              }
            }
          >
            <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
              {icon}
              <Typography>{name}</Typography>
            </Stack>
          </LinkComponent>
        ))}
        <LinkComponent to={''} onClick={logoutHandler}>
          <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
            <ExitToAppIcon />
            <Typography>Logout</Typography>
          </Stack>
        </LinkComponent>
      </Stack>
    </Stack>
  );
};

const isAdmin: boolean = true;

const AdminLayout = ({ children }: AdminLayoutType) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMobile = () => setIsMobile(!isMobile);
  const handleClose = () => setIsMobile(false);

  if (!isAdmin) return <Navigate to='/admin' />;

  return (
    <Grid container minHeight={'100vh'}>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          right: '1rem',
          top: '1rem',
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: grayColor }}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w={'50vw'} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
