import { styled } from '@mui/material';
import { matBlack } from '../../constants/colors';

const CurveButton = styled('button')`
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${matBlack};
  color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default CurveButton;
