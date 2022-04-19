import styled, { createGlobalStyle } from 'styled-components';
import { PRIMARY, WHITE_OPACITY } from '../../config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

export const GlobalDraggableItemStyles = createGlobalStyle`
  .DraggableList__DraggableItem {
    &:focus {
      border: 0;
      outline: 0;
    }
  }
  .DraggableList__DraggableItem--dragging {
    background-color: ${WHITE_OPACITY};
    outline: 2px dashed ${PRIMARY};
    & * {
      background-color: transparent !important;
    }
  }
`;
