import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Typography } from '@mui/material';

const Home = lazy(() => import('../pages/Home/Home'));
const Groups = lazy(() => import('../pages/Groups/Groups'));
const Chat = lazy(() => import('../pages/Chat/Chat'));
const Login = lazy(() => import('../pages/Authentication/Login'));
const AdminLogin = lazy(() => import('../pages/Admin/AdminLogin'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard'));
const UserManagement = lazy(() => import('../pages/Admin/UserManagement'));
const ChatManagement = lazy(() => import('../pages/Admin/ChatManagement'));
const MessageManagement = lazy(
  () => import('../pages/Admin/MessageManagement')
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='groups' element={<Groups />} />
        <Route path='chat/:chatId' element={<Chat />} />
        <Route path='admin' element={<AdminLogin />} />
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='admin/users' element={<UserManagement />} />
        <Route path='admin/chats' element={<ChatManagement />} />
        <Route path='admin/messages' element={<MessageManagement />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route
        path='*'
        element={<Typography variant='h1'>Not Found</Typography>}
      />
    </Routes>
  );
};

export default AppRoutes;
