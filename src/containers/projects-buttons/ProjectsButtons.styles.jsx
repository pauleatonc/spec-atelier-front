import styled from 'styled-components';

export const ButtonSection = styled.section`
  margin: 16px 0 38px;
  display: flex;
  flex: 1;
  justify-content: ${({ justify }) => justify || 'flex-star'};
`;
