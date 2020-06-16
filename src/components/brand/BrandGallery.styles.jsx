import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  gap: 8px;
  grid-template-areas: "one two"
                       "three three"
                       "four five";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 160px 180px 160px;
`;

export const Content = styled.div`
  grid-area: ${({ name }) => name || 'one'};
  justify-self: stretch;
  align-self: stretch;
`;