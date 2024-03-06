import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import SimpleNotifications from '../../data/SampleNotifications';
import { memo } from 'react';

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {};
  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'25rem'}>
        <DialogTitle>Notifications</DialogTitle>
        {SimpleNotifications.length > 0 ? (
          SimpleNotifications.map((item, index) => (
            <NotificationItem
              key={index}
              sender={item.sender}
              _id={item._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography>0 notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

type HandlerProps = {
  _id: string;
  accept: boolean;
};

type NotificationItemType = {
  sender: {
    avatar: string;
    name: string;
  };
  _id: string;
  handler: (props: HandlerProps) => void;
};

const NotificationItem = memo(
  ({ sender: { avatar, name }, _id, handler }: NotificationItemType) => {
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
            {`${name} send you a friend request`}
          </Typography>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
          >
            <Button onClick={() => handler({ _id, accept: true })}>
              Accept
            </Button>
            <Button
              color='error'
              onClick={() => handler({ _id, accept: false })}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </ListItem>
    );
  }
);

export default Notifications;
