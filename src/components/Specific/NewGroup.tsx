import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import UserItem, { UserType } from '../../common/UserItem/UserItem';
import { useState } from 'react';
import { useInputValidation } from '6pp';
import SimpleUsers from '../../data/SampleUsers';

const NewGroup = () => {
  const groupName = useInputValidation('');

  const [members, setMembers] = useState<UserType[]>(SimpleUsers);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const selectMemberHandler = (id: string) => {
    setMembers((prev) =>
      prev.map((user, i) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.toSpliced(prev.indexOf(id), 1) : [...prev, id]
    );
  };

  const submitHandler = () => {};
  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: '1rem', sm: '3rem' }} width={'25rem'} spacing={'2rem'}>
        <DialogTitle textAlign={'center'} variant='h4'>
          New Group
        </DialogTitle>
        <TextField
          label='Group Name'
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant='body1'>members</Typography>
        <Stack>
          {members.map((user, index) => (
            <UserItem
              key={user._id}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>

        <Stack direction={'row'} justifyContent={'space-evenly'}>
          <Button color='error' variant='outlined' size='large'>
            Cancel
          </Button>
          <Button variant='contained' size='large'>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
