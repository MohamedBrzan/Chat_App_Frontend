import AppLayout from '../Layout/AppLayout';

const Chat = () => {
  return <div>Chat</div>;
};

const ChatHOC = AppLayout()(Chat);

export default ChatHOC;
