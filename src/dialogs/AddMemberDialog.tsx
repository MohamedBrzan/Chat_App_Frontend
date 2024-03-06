import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material';
import SampleUsers from '../data/SampleUsers.ts';
import UserItem, { UserType } from '../common/UserItem/UserItem';
import { useState } from 'react';

type Props = {
  addMember: () => void;
  isLoadingAddMember: boolean;
  chatId: string;
};

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }: Props) => {
  const [members, setMembers] = useState<UserType[]>(SampleUsers);
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

  const addMemberSubmitHandler = () => {
   
  };
  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };
  return (
    <Dialog open={true} onClose={closeHandler}>
      <Stack>
        <DialogTitle textAlign={'center'}>Add Member</DialogTitle>
        <Stack>
          {members.length > 0 ? (
            members.map((user, index) => (
              <UserItem
                key={index}
                user={{ ...user, isAdded: selectedMembers.includes(user._id) }}
                handler={selectMemberHandler}
              />
            ))
          ) : (
            <Typography textAlign={'center'}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          padding={'2rem'}
          spacing={'2rem'}
        >
          <Button color='error' onClick={closeHandler}>
            Cancel
          </Button>
          <Button variant='contained' onClick={addMemberSubmitHandler}>
            Submit changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
