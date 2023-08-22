import { styled } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
