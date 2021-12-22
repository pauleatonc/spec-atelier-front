import styled from 'styled-components';
import { GALLERY } from '../config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px 81px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${GALLERY};
`;

export const ButtonCreateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PaddingContainer = styled.div`
  padding: 0 81px;
`;
