import styled from 'styled-components';
import { VIEW_HEADER_HEIGHT } from '../../config/constants/styled-vars';

const position_bottom = 430;

export const Container = styled.section`
  width: 100%;
  position: relative;
  height: ${VIEW_HEADER_HEIGHT + position_bottom}px;
  margin-bottom: 32px;
`;
