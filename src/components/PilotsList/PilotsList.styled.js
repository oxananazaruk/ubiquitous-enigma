import styled from 'styled-components';

export const ListPilots = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const PilotCard = styled.li`
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.spacing(3)};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
