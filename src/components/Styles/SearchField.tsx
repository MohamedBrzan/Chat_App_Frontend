import { styled } from '@mui/material';
import { grayColor } from '../../constants/colors';

const SearchField = styled('input')`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${grayColor};
  font-size: 1.1rem;
`;

export default SearchField;
