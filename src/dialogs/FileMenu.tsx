import { Menu } from '@mui/material';

type FileMenuProps = {
  anchorE1: HTMLElement | null;
};

const FileMenu = ({ anchorE1 }: FileMenuProps) => {
  return (
    <Menu
      anchorEl={anchorE1}
      sx={{
        width: '10rem',
      }}
      open={false}
    >
      <div
        style={{
          width: '10rem',
        }}
      ></div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolor quo
      nemo, corporis minus quia laudantium ullam nihil tenetur facilis impedit
      quis vitae ipsam atque repellat officia laboriosam a id!
    </Menu>
  );
};

export default FileMenu;
