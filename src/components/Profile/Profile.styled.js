import styled from 'styled-components';

const getBorderColor = p => {
  switch (p.$rank) {
    case 'novice':
      return 'green';
    case 'intermediate':
      return 'yellow';
    case 'expert':
      return 'red';
    default:
      return p.colors.black;
  }
};

export const CardWrapper = styled.div`
  border: 4px solid ${getBorderColor};
`;
