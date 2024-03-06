import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { bgGradient, matBlack } from '../../constants/colors';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Suspense, lazy, memo, useEffect, useState } from 'react';
import LinkStyle from '../../components/Styles/LinkStyle';
import AvatarCard from '../../common/AvatarCard/AvatarCard';
import SampleChats from '../../data/SampleChatsData';
import SampleUsers from '../../data/SampleUsers';
import UserItem from '../../common/UserItem/UserItem';

const ConfirmDeleteDialog = lazy(
  () => import('../../dialogs/ConfirmDeleteDialog')
);

const AddMemberDialog = lazy(() => import('../../dialogs/AddMemberDialog'));

const isAddMember = false;

const Groups = () => {
  const chatId = useSearchParams()[0].get('group');
  const navigate = useNavigate();
  const navigateBack = () => navigate('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [confirmDeleteDialog, setConfirmDeleteDialog] =
    useState<boolean>(false);

  const [groupName, setGroupName] = useState<string>('Group Name');
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] =
    useState<string>('');
  const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {};

  const deleteHandler = () => {};

  const removeMemberHandler = (id: string) => {
    console.log('remove => ', id);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName('Group Name');
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName('');
      setGroupNameUpdatedValue('');
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
            position: 'fixed',
            right: '1rem',
            top: '1rem',
          },
        }}
      >
        <Tooltip title='menu'>
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title='back'>
        <IconButton
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            bgcolor: matBlack,
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)',
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      spacing={'1rem'}
      padding={'3rem'}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setGroupNameUpdatedValue(target.value);
            }}
          />
          <IconButton onClick={() => setIsEdit(false)}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant='h4'>{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: 'row',
        xs: 'column-reverse',
      }}
      spacing={'1rem'}
      p={{ xs: '0', sm: '1rem', md: '1rem 4rem' }}
    >
      <Button
        size='large'
        color='error'
        variant='outlined'
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size='large'
        variant='contained'
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={'100vh'}>
      <Grid
        item
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
          backgroundImage: bgGradient,
        }}
        sm={4}
      >
        <GroupsList myGroups={SampleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: '1rem 3rem',
        }}
      >
        {IconBtns}
        {groupName && (
          <>
            {GroupName}

            <Typography
              margin={'2rem'}
              alignSelf={'flex-start'}
              variant='body1'
            >
              Members
            </Typography>
            <Stack
              maxWidth={'45rem'}
              width={'100%'}
              boxSizing={'border-box'}
              padding={{
                sm: '1rem',
                xs: '0',
                md: '1rem 4rem',
              }}
              spacing={'2rem'}
              height={'50vh'}
              overflow={'auto'}
            >
              {SampleUsers.map((user, index) => (
                <UserItem
                  key={index}
                  user={user}
                  styling={{
                    boxShadow: '0 0 0.5rem rgba(0,0,0,0.2)',
                    padding: '1rem 2rem',
                    borderRadius: '1rem',
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog
            addMember={function (): void {
              throw new Error('Function not implemented.');
            }}
            isLoadingAddMember={false}
            chatId={''}
          />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList myGroups={SampleChats} chatId={chatId} w={'50vw'} />
      </Drawer>
    </Grid>
  );
};

type GroupsType = {
  _id: string;
  name: string;
  avatar: string;
};

type GroupsListProps = {
  w?: string | '100%';
  myGroups: GroupsType[];
  chatId: string;
};

type GroupListProps = {
  group: GroupsType;
  chatId: string;
};

const GroupsList = memo(({ w, myGroups, chatId }: GroupsListProps) => {
  return (
    <Stack
      width={w}
      height={'100%'}
      sx={{
        backgroundImage: bgGradient,
      }}
    >
      {myGroups.length > 0 ? (
        myGroups.map((group, index) => (
          <GroupsListItem key={index} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={'center'} padding={'1rem'}>
          no groups
        </Typography>
      )}
    </Stack>
  );
});

const GroupsListItem = ({
  group: { name, avatar, _id },
  chatId,
}: GroupListProps) => {
  return (
    <LinkStyle
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
        <AvatarCard avatar={[avatar]} max={2} />
        <Typography>{name}</Typography>
      </Stack>
    </LinkStyle>
  );
};

// const GroupsHOC = AppLayout()(Groups);

export default Groups;
