import styled from 'styled-components';
import { FaPlane } from 'react-icons/fa6';

const getBgColor = p => {
  // console.log(p);
  switch (p.$variant) {
    case 'first':
      return 'white';
    case 'second':
      return 'yellow';
    default:
      return 'black';
  }
};

export const Title = styled.h1`
  background-color: ${p => {
    return p.theme.colors.accent;
  }};
  color: ${getBgColor};
`;

export const IconPlane = styled(FaPlane)`
  color: ${p => p.theme.colors.white};
`;
