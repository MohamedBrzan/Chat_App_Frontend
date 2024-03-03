import { Stack } from '@mui/material';
import ChatItem from './ChatItem';
type ChatsData = {
  avatar: string[];
  name: string;
  _id: string;
  groupChat: boolean;
  members: string[];
};

type ChatItemProps = {
  w?: string;
  chats: ChatsData[];
  chatId: string;
  onlineUsers: string[];
  newMessagesAlert: [{ chatId: string; count: number }];
  handleDeleteChat: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => void;
};

const ChatList = ({
  chats,
  chatId,
  onlineUsers,
  newMessagesAlert,
  handleDeleteChat,
}: ChatItemProps) => {
  return (
    <Stack width={'100%'} direction={'column'}>
      {chats.map(({ avatar, name, _id, groupChat, members }, i) => {
        const newMessageAlertResult = newMessagesAlert?.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some(() => onlineUsers?.includes(_id));

        const data = {
          chatId: newMessageAlertResult,
          count: 1,
        };

        return (
          <ChatItem
            index={i}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            newMessage={false}
            newMessageAlert={data}
            members={members}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
