import styled, { createGlobalStyle } from 'styled-components';
import { COLOR_PRIMARY } from '../../config/constants/styled-vars';

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
    background-color: rgba(255, 255, 255, 0.8);
    outline: 2px dashed ${COLOR_PRIMARY};

    & * {
      background-color: transparent !important;
    }
  }
`;
