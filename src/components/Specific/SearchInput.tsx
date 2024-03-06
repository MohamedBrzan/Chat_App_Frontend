import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useInputValidation } from '6pp';
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../../common/UserItem/UserItem';
import SimpleUsers from '../../data/SampleUsers';

const SearchInput = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const search = useInputValidation('');

  type UsersType = {
    _id: string;
    avatar: string;
    name: string;
  };

  const [users, setUsers] = useState<UsersType[]>(SimpleUsers);
  const [isLoadingSendFriendRequest, setIsLoadingSendFriendRequest] =
    useState<boolean>(false);

  const addFriendHandler = (id: string) => {
    console.log(id);
  };

  return (
    <Dialog open={open}>
      <Stack p={'2rem'} direction={'column'} width={'25rem'}>
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>
        <TextField
          label=''
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user, index) => (
            <UserItem
              key={user._id}
              user={user}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchInput;
