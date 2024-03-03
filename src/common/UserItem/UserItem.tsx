import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Add as AddIcon } from '@mui/icons-material';

type UserItemType = {
  user: {
    _id: string;
    avatar: string;
    name: string;
  };
  handler: (id: string) => void;
  handlerIsLoading: boolean;
};

const UserItem = memo(({ user, handler, handlerIsLoading }: UserItemType) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={'1rem'}
        width={'100%'}
      >
        <Avatar
          src={avatar || 'https://www.w3schools.com/howto/img_avatar.png'}
        />
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Typography>
        <IconButton
          size='small'
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
});

export default UserItem;
