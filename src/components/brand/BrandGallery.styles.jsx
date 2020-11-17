import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: grid;
  gap: 8px;
  grid-template-areas: "one two"
                       "three three"
                       "four five";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 260px 120x;
  max-height: 500px;
`;

export const Content = styled.div`
  grid-area: ${({ name }) => name || 'one'};
  justify-self: stretch;
  align-self: stretch;
`;