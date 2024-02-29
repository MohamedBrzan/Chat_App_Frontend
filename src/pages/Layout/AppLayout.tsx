import { Grid } from '@mui/material';
import ChatList from '../../chat/ChatList';
import SimpleChats from '../../data/SimpleData';
import Main from '../../components/Main/Main';
import { useParams } from 'react-router-dom';

const AppLayout = () => {
  const { chatId } = useParams();
  console.log('appLayout ', chatId);

  const handleDeleteChat = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => {
    e.preventDefault();
    console.log('Delete Chat', _id, groupChat);
  };
  return (
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
          onlineUsers={['1', '2']}
          newMessagesAlert={[{ chatId, count: 3 }]}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}>
        <Main />
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
        Third
      </Grid>
    </Grid>
  );
};

export default AppLayout;
