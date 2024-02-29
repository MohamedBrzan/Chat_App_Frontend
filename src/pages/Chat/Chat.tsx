import { useParams } from 'react-router-dom';

const Chat = () => {
  const { chatId } = useParams();

  console.log('chatId from chat page ', chatId);
  return <div>Chat</div>;
};

export default Chat;
