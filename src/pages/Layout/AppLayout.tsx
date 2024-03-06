import { Grid } from '@mui/material';
import ChatList from '../../chat/ChatList';
import SimpleChats from '../../data/SampleChatsData';
import { useParams } from 'react-router-dom';
import Title from '../../common/Title/Title';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../Profile/Profile';

const AppLayout = () => (WrappedComponent) => {
  const handleDeleteChat = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => {
    e.preventDefault();
    console.log('Delete Chat', _id, groupChat);
  };
  const HOC = (props) => {
    const { chatId } = useParams();
    return (
      <>
        <Title title='Chat App' desc='this is chat app' />
        <Header />
        <Grid container height={'calc(100vh - 4rem)'}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: 'none', sm: 'block' } }}
            height={'100%'}
          >
            <ChatList
              chats={SimpleChats}
              chatId={chatId || '1'}
              handleDeleteChat={handleDeleteChat}
              onlineUsers={[]}
              newMessagesAlert={[{ chatId: chatId || '1', count: 4 }]}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: 'none', sm: 'block' },
              padding: '2rem',
              bgcolor: 'rgba(0,0,0,.85)',
            }}
            height={'100%'}
          >
            <Profile />
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  };
  return HOC;
};

export default AppLayout;
