import { Avatar, AvatarGroup, Box, Stack } from '@mui/material';
import { transformImage } from '../../lib/Features';

type AvatarCardProps = {
  avatar: string[];
  max: number | 4;
};

const AvatarCard = ({ avatar, max }: AvatarCardProps) => {
  return (
    <Stack direction={'row'} spacing={0.5}>
      <AvatarGroup
        max={max}
        sx={{
          position: 'relative',
        }}
      >
        <Box width='5rem' height='3rem'>
          {avatar.map((i, index) => (
            <Avatar
              src={transformImage(i).toString()}
              alt={`Avatar ${index}`}
              key={Math.random() * 100}
              sx={{
                width: '3rem',
                height: '3rem',
                position: 'absolute',
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
