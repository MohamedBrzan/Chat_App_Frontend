import { Box, Stack, Typography } from '@mui/material';
import LinkStyle from '../components/Styles/LinkStyle';
import { memo } from 'react';
import AvatarCard from '../common/AvatarCard/AvatarCard';

export type ChatItemProps = {
  avatar: string[];
  name: string;
  _id: string;
  groupChat: boolean;
  sameSender: boolean;
  isOnline: boolean;
  newMessage: boolean;
  newMessageAlert: {
    count: number;
  };
  index: number;
  handleDeleteChat: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => void;
  members: string[];
};

const ChatItem = memo(
  ({
    avatar,
    name,
    _id,
    groupChat,
    sameSender,
    isOnline,
    newMessage,
    newMessageAlert,
    index,
    handleDeleteChat,
    members,
  }: ChatItemProps) => {
    return (
      <LinkStyle
        key={index}
        sx={{
          padding: 0,
        }}
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: sameSender ? 'black' : 'unset',
            color: sameSender ? 'white' : 'unset',
            borderBottom: '1px solid #f0f0f0',
            position: 'relative',
          }}
        >
          <AvatarCard avatar={avatar} max={4} />

          <Stack>
            <Typography>{name}</Typography>
            {newMessageAlert && (
              <Typography>{newMessageAlert.count} New Message</Typography>
            )}
          </Stack>
          {isOnline && (
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'green',
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-50%)',
              }}
            />
          )}
        </div>
      </LinkStyle>
    );
  }
);

export default ChatItem;
