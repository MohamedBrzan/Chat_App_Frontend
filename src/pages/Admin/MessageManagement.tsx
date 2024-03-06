import { Avatar, Box, Stack } from '@mui/material';
import Table, { FunctionParam } from '../../common/Table/Table';
import AdminLayout from '../Layout/AdminLayout';
import { useEffect, useState } from 'react';
import DashboardData from '../../data/SampleRowsData';
import { fileFormat, transformImage } from '../../lib/Features';
import moment from 'moment';
import { matBlack } from '../../constants/colors';
import RenderAttachment from '../../common/RenderAttachment/RenderAttachment';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'attachments',
    headerName: 'Attachments',
    headerClassName: 'table-header',
    width: 200,
    renderCell: ({ row: { attachments } }: FunctionParam) => {
      return attachments.length > 0
        ? attachments.map(({ url }, index) => {
            const file = fileFormat(url);
            return (
              <Box>
                <a
                  href={url}
                  download
                  target='_blank'
                  style={{
                    color: matBlack,
                  }}
                >
                  {RenderAttachment(file, url)}
                </a>
              </Box>
            );
          })
        : 'No Attachments';
    },
  },
  {
    field: 'content',
    headerName: 'Content',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'sender',
    headerName: 'Sent By',
    headerClassName: 'table-header',
    width: 200,
    renderCell: ({
      row: {
        sender: { name, avatar },
      },
    }: FunctionParam) => (
      <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
        <Avatar src={avatar} alt={name} />
        <span>{name}</span>
      </Stack>
    ),
  },
  {
    field: 'chat',
    headerName: 'Chat',
    headerClassName: 'table-header',
    width: 220,
  },
  {
    field: 'groupChat',
    headerName: 'Group Chat',
    headerClassName: 'table-header',
    width: 100,
  },
  {
    field: 'createdAt',
    headerName: 'Time',
    headerClassName: 'table-header',
    width: 250,
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState<[]>([]);

  useEffect(() => {
    setRows(
      DashboardData.messages.map((message) => ({
        ...message,
        id: message._id,
        sender: {
          name: message.sender.name,
          avatar: transformImage(message.sender.avatar, 50),
        },
        createdAt: moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table
        heading={'All Messages'}
        rows={rows}
        columns={columns}
        rowHeight={100}
      />
    </AdminLayout>
  );
};

export default MessageManagement;
