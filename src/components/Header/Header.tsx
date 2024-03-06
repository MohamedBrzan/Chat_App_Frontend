import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { headerBG } from '../../constants/colors';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { ReactNode, Suspense, lazy, useState } from 'react';
const SearchInput = lazy(() => import('../Specific/SearchInput'));
const NotificationDialog = lazy(() => import('../Specific/Notifications'));
const NewGroupDialog = lazy(() => import('../Specific/NewGroup'));

type IconBtnProps = {
  title: string;
  icon: ReactNode;
  onClick: () => void;
};

const IconBtn = ({ title, icon, onClick }: IconBtnProps) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Header = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [isNewGroup, setIsNewGroup] = useState<boolean>(false);
  const [isNotification, setIsNotification] = useState<boolean>(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };
  const openSearchDialog = () => {
    setSearch(!search);
  };
  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };
  const openNotification = () => {
    setIsNotification(!isNotification);
  };
  const navigateToGroup = () => navigate('/groups');
  const logoutHandler = () => {};

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        height={'4rem'}
      >
        <AppBar
          position='static'
          sx={{
            bgcolor: headerBG,
          }}
        >
          <Toolbar>
            <Typography
              variant='h6'
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Link
                to='/'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Chat
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title='Search'
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />
              <IconBtn
                title='New Group'
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title='Manage Groups'
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title='Notifications'
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title='Logout'
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {search && (
        <Suspense fallback={<Backdrop open />}>
          <SearchInput />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
