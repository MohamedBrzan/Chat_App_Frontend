import { useEffect, useState } from 'react';
import Table, { FunctionParam } from '../../common/Table/Table';
import AdminLayout from '../Layout/AdminLayout';
import { Avatar, Stack } from '@mui/material';
import AvatarCard from '../../common/AvatarCard/AvatarCard';
import DashboardData from '../../data/SampleRowsData';
import { transformImage } from '../../lib/Features';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    headerClassName: 'table-header',
    width: 150,
    renderCell: ({ row: { avatar } }: FunctionParam) => (
      <AvatarCard avatar={[avatar]} max={100} />
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: 300,
  },
  {
    field: 'totalMembers',
    headerName: 'Total Members',
    headerClassName: 'table-header',
    width: 120,
  },
  {
    field: 'members',
    headerName: 'Members',
    headerClassName: 'table-header',
    width: 150,
    renderCell: ({ row: { members } }: FunctionParam) => (
      <AvatarCard max={100} avatar={members} />
    ),
  },
  {
    field: 'totalMessages',
    headerName: 'Total Messages',
    headerClassName: 'table-header',
    width: 120,
  },
  {
    field: 'creator',
    headerName: 'Created By',
    headerClassName: 'table-header',
    width: 250,
    renderCell: ({
      row: {
        creator: { name, avatar },
      },
    }: FunctionParam) => (
      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Avatar src={avatar} alt={name} />
        <span>{name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState<[]>([]);

  useEffect(() => {
    setRows(
      DashboardData.chats.map((chat) => ({
        ...chat,
        id: chat._id,
        avatar: chat.avatar.map((i) => transformImage(i, 50)),
        members: chat.members.map(({ avatar }) => transformImage(avatar, 50)),
        creator: {
          name: chat.creator.name,
          avatar: transformImage(chat.creator.avatar, 50),
        },
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table
        rows={rows}
        heading={'All Chats'}
        rowHeight={100}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default ChatManagement;
