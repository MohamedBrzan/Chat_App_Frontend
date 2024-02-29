import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Groups = lazy(() => import('../pages/Groups/Groups'));
const Chat = lazy(() => import('../pages/Chat/Chat'));
const Login = lazy(() => import('../pages/Authentication/Login'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='groups' element={<Groups />} />
        <Route path='chat/:chatId' element={<Chat />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
