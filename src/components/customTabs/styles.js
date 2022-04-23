import styled from 'styled-components';
import { MERCURY } from 'config/constants/styled-vars';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

export const BorderContainer = styled.div`
  border: ${({ isProfileStatsTabs }) =>
    isProfileStatsTabs ? `1px solid ${MERCURY}` : ''};
`;
