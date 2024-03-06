import { IconButton, Stack } from '@mui/material';
import AppLayout from '../Layout/AppLayout';
import { Fragment, useRef } from 'react';
import { grayColor, headerBG } from '../../constants/colors';
import InputBox from '../../components/Styles/InputBox';
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import FileMenu from '../../dialogs/FileMenu';
import SampleMessages from '../../data/SampleMessagesData';
import MessageComponent from '../../common/MessageComponent/MessageComponent';

const Chat = () => {
  const containerRef = useRef(null);

  const user = {
    _id: 'hsllhjlhgjlhk',
    name: 'Ali clay',
    isAdded: false,
    avatar: '',
  };

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        padding={'1rem'}
        spacing={'1rem'}
        bgcolor={grayColor}
        height={'90%'}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        {SampleMessages.map((messageData, index) => (
          <MessageComponent user={user} message={messageData} key={index} />
        ))}
      </Stack>
      <form
        style={{
          height: '10%',
        }}
      >
        <Stack
          direction={'row'}
          height={'100%'}
          padding={'1rem'}
          alignItems={'center'}
          position={'relative'}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: '1.5rem',
              rotate: '30deg ',
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='type Message Here....' />
          <IconButton
            type='submit'
            sx={{
              rotate: '-30deg',
              bgcolor: headerBG,
              color: 'white',
              marginLeft: '1rem',
              padding: '0.5rem',
              '&:hover': {
                bgcolor: 'error.dark',
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu anchorE1={null} />
    </Fragment>
  );
};

const ChatHOC = AppLayout()(Chat);

export default ChatHOC;
