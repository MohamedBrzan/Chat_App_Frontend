import { Avatar, Stack, SvgIconTypeMap, Typography } from '@mui/material';
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from '@mui/icons-material';
import { OverridableComponent as OverrideComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';
import moment from 'moment';
const Profile = () => {
  const val = moment('2023-11-04T18:30:00.000Z').fromNow();

  return (
    <Stack spacing={'2rem'} direction={'column'} alignItems={'center'}  >
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: 'contain',
          marginBottom: '1rem',
          border: '1px solid white',
        }}
      />
      <ProfileCard heading={'Bio'} text={'this mo profile'} />
      <ProfileCard
        heading={'Username'}
        text={'@MohamedBrzan'}
        icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={'Name'}
        text={'Mohamed Brzan'}
        icon={<FaceIcon />}
      />
      <ProfileCard heading={'Joined'} text={val} icon={<CalenderIcon />} />
    </Stack>
  );
};

type ProfileCardType = {
  text: string;
  heading: string;
  icon?:
    | (OverrideComponent<SvgIconTypeMap<object, 'svg'>> & {
        muiName: string;
      })
    | ReactNode;
};

const ProfileCard = ({ text, icon, heading }: ProfileCardType) => (
  <Stack
    direction={'row'}
    alignItems={'center'}
    spacing={'1rem'}
    color={'white'}
    textAlign={'center'}
  >
    {icon && icon}
    <Stack>
      <Typography variant='body1'>{text}</Typography>
      <Typography variant='caption' color={'grey'}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
