import {
  Dashboard as DashboardIcon,
  Groups as GroupsIcon,
  ManageAccounts as ManageAccountsIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

const adminTabs = [
  {
    name: 'dashboard',
    path: '/admin/dashboard',
    icon: <DashboardIcon />,
  },
  {
    name: 'Users',
    path: '/admin/users',
    icon: <ManageAccountsIcon />,
  },
  {
    name: 'Groups',
    path: '/admin/chats',
    icon: <GroupsIcon />,
  },
  {
    name: 'Messages',
    path: '/admin/messages',
    icon: <MessageIcon />,
  },
];

export { adminTabs };
