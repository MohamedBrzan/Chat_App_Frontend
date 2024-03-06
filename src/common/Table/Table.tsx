import { Container, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { matBlack } from '../../constants/colors';

type Attachment = {
  _id: string;
  url: string;
  public_id: string;
};

export type FunctionParam = {
  row: {
    name: string;
    avatar: string;
    sender: {
      avatar: string;
      name: string;
    };
    members: string[];
    creator: {
      name: string;
      avatar: string;
    };
    attachments: Attachment[];
  };
};

type ColumnType = {
  field: string;
  headerName: string;
  headerClassName: string;
  width: number;
  renderCell?: (param: FunctionParam) => JSX.Element;
};

type TableType = {
  rows: [];
  columns: ColumnType[];
  heading: string;
  rowHeight: number;
};

const Table = ({ rows, columns, heading, rowHeight }: TableType) => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Paper
        elevation={3}
        sx={{
          padding: '1rem 4rem',
          borderRadius: '1rem',
          margin: 'auto',
          width: '100%',
          overflow: 'hidden',
          height: '100%',
          boxShadow: 'none',
        }}
      >
        <Typography
          textAlign={'center'}
          variant='h4'
          sx={{
            margin: '2rem',
            textTransform: 'uppercase',
          }}
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{ height: '80%' }}
          sx={{
            border: 'none',
            '.table-header': {
              bgcolor: matBlack,
              color: 'white',
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
