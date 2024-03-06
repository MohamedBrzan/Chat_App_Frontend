import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Remove as RemoveIcon, Add as AddIcon } from '@mui/icons-material';

export type UserType = {
  _id: string;
  avatar: string;
  name: string;
  isAdded: boolean | false;
};

type UserItemType = {
  user: UserType;
  handler: (id: string) => void;
  handlerIsLoading?: boolean;
  styling?: object;
};

const UserItem = memo(
  ({
    user: { name, _id, avatar, isAdded },
    handler,
    handlerIsLoading,
    styling,
  }: UserItemType) => {
    return (
      <ListItem>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={'1rem'}
          width={'100%'}
          {...styling}
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
              bgcolor: isAdded ? 'error.main' : 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: isAdded ? 'error.dark' : 'primary.dark',
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </Stack>
      </ListItem>
    );
  }
);

export default UserItem;
