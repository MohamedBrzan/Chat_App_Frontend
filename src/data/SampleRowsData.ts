const DashboardData = {
  users: [
    {
      name: 'John',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      _id: '1',
      username: 'john_doe',
      friends: 20,
      groups: 5,
    },
    {
      name: 'mazen',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      _id: '2',
      username: 'john_doe',
      friends: 13,
      groups: 2,
    },
  ],
  chats: [
    {
      name: 'John',
      avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
      _id: '1',
      groupChat: false,
      members: [
        { _id: '1', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
        { _id: '2', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: 'John',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    },
    {
      name: 'mazen',
      avatar: ['https://www.w3schools.com/howto/img_avatar.png'],
      _id: '2',
      groupChat: true,
      members: [
        { _id: '1', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
        { _id: '2', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: 'John',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    },
  ],
  messages: [
    {
      attachments: [
        {
          public_id: 'hldhhs',
          url: 'https://www.w3schools.com/howto/img_avatar.png',
        },
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur',
      _id: 'klhdfghdsfhdsjfhsd',
      sender: {
        _id: 'user._id',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Mohamed',
      },
      chat: 'chatId',
      groupChat: false,
      createdAt: '2024-02-12T10:41:30.630Z',
    },
    {
      attachments: [
        {
          public_id: 'hldhhs 2',
          url: 'https://www.w3schools.com/howto/img_avatar.png',
        },
      ],
      content: 'this is another message',
      _id: 'ssdhjlhhljfds',
      sender: {
        _id: 'anyId',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Ali',
      },
      chat: 'chatId2',
      groupChat: true,
      createdAt: '2024-02-12T10:41:30.630Z',
    },
  ],
};

export default DashboardData;
