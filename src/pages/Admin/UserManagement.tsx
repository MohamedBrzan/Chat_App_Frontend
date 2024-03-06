import { useEffect, useState } from 'react';
import Table, { FunctionParam } from '../../common/Table/Table';
import AdminLayout from '../Layout/AdminLayout';
import { Avatar } from '@mui/material';
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
      <Avatar src={avatar} alt={avatar} />
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'username',
    headerName: 'Username',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'friends',
    headerName: 'Friends',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'groups',
    headerName: 'Groups',
    headerClassName: 'table-header',
    width: 200,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState<[]>([]);

  useEffect(() => {
    setRows(
      DashboardData.users.map((user, index) => ({
        ...user,
        id: user._id,
        avatar: transformImage(user.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table
        rows={rows}
        heading={'All Users'}
        rowHeight={100}
        columns={columns}
      />
    </AdminLayout>
  );
};

export default UserManagement;
