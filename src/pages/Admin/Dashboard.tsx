import {
  Box,
  Container,
  Paper,
  Stack,
  SvgIconTypeMap,
  Typography,
} from '@mui/material';
import AdminLayout from '../Layout/AdminLayout';
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import moment from 'moment';
import SearchField from '../../components/Styles/SearchField';
import CurveButton from '../../components/Styles/CurveButton';
import { matBlack } from '../../constants/colors';
import { OverridableComponent as OverrideComponent } from '@mui/material/OverridableComponent';
import { DoughnutChart, LineChart } from '../../components/Specific/Charts';

const Dashboard = () => {
  const AppBar = (
    <Paper
      elevation={3}
      sx={{ padding: '2rem', margin: '2rem 0', borderRadius: '1rem' }}
    >
      <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
        <AdminPanelSettingsIcon sx={{ fontSize: '3rem' }} />
        <SearchField placeholder='search...' />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: 'none',
            lg: 'block',
          }}
          color={matBlack}
          textAlign={'center'}
        >
          {moment().format('MMMM Do YYYY')}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      spacing={'2rem'}
      justifyContent={'space-between'}
      alignItems={'center'}
      margin={'2rem 0'}
    >
      <Widget title={'Users'} value={34} icon={<PersonIcon />} />
      <Widget title={'chats'} value={3} icon={<GroupIcon />} />
      <Widget title={'Messages'} value={453} icon={<MessageIcon />} />
    </Stack>
  );
  return (
    <AdminLayout>
      <Container component={'main'}>
        {AppBar}

        <Stack direction={'row'} spacing={'2rem'} flexWrap={'wrap'}>
          <Paper
            elevation={3}
            sx={{
              padding: '2rem 3.5rem',
              borderRadius: '1rem',
              width: '100%',
              maxWidth: '45rem',
              height: '25rem',
            }}
          >
            <Typography variant='h5'>Last Messages</Typography>
            <LineChart value={[23, 56, 33, 67, 33, 2]} />
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: '1rem',
              borderRadius: '1rem',
              width: { xs: '100%', sm: '50%' },
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '45rem',
              height: '25rem',
            }}
          >
            <DoughnutChart
              value={[23, 66]}
              labels={['Single Chats', 'Group Chats']}
            />

            <Stack
              position={'absolute'}
              direction={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={'0.5rem'}
              width={'100%'}
              height={'100%'}
            >
              <GroupIcon /> <Typography>Vs</Typography> <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

type WidgetType = {
  title: string;
  value: number;
  icon: OverrideComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
};

const Widget = ({ title, value, icon }: WidgetType) => (
  <Paper
    elevation={3}
    sx={{
      padding: '2rem',
      margin: '2rem 0',
      borderRadius: '1.5rem',
      width: '20rem',
    }}
  >
    <Stack alignItems={'center'} spacing={'1rem'}>
      <Typography
        sx={{
          color: matBlack,
          borderRadius: '50%',
          border: `5px solid ${matBlack}`,
          width: '5rem',
          height: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {value}
      </Typography>
      <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
        {icon}

        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
