import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default LinkStyle;
