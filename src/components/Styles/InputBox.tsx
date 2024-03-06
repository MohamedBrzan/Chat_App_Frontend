import { styled } from '@mui/material';
import { grayColor } from '../../constants/colors';

const InputBox = styled('input')`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`;

export default InputBox;
