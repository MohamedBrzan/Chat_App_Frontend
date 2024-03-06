import { memo } from 'react';
import { UserType } from '../UserItem/UserItem';
import { Box, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import moment from 'moment';
import { fileFormat } from '../../lib/Features';
import RenderAttachment from '../RenderAttachment/RenderAttachment';

type Attachment = {
  public_id: string;
  url: string;
};

export type MessageType = {
  attachments: Attachment[];
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
};

type MessageComponentType = {
  user: UserType;
  message: MessageType;
};

const MessageComponent = memo(
  ({
    message: { attachments, content, sender, createdAt },
    user,
  }: MessageComponentType) => {
    const sameSender = sender?._id === user._id;
    const timeAge = moment(createdAt).fromNow();
    return (
      <div
        style={{
          alignSelf: sameSender ? 'flex-end' : 'flex-start ',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '5px',
          padding: '.5rem',
          width: 'fit-content',
        }}
      >
        {!sameSender && (
          <Typography color={lightBlue} fontWeight={'600'} variant='caption'>
            {sender.name}
          </Typography>
        )}
        {content && <Typography>{content}</Typography>}
        {attachments.length > 0 &&
          attachments.map(({ url }, index) => {
            const file = fileFormat(url);
            return (
              <Box key={index}>
                <a
                  href={url}
                  target='_blank'
                  download
                  style={{ color: 'black' }}
                >
                  {RenderAttachment(file, url)}
                </a>
              </Box>
            );
          })}
        <Typography variant='caption' color={'text.secondary'}>
          {timeAge}
        </Typography>
      </div>
    );
  }
);

export default MessageComponent;
