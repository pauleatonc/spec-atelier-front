import styled, { createGlobalStyle } from 'styled-components';
import {
  BLACK,
  GALLERY,
  GRAY,
  MINE_SHAFT,
  MINE_SHAFT_RGB,
  PUERTO_RICO,
  SWISS_COFFEE,
  WHITE,
} from 'config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 0 0 23px;
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
`;

export const Actions = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 14px 0 0;
  width: 100%;
`;

export const EditorStyles = createGlobalStyle`
  .ck-toolbar-container {
    border: 0 !important;
    box-shadow: 0 1px 1px 0 rgba(${BLACK}, 0.14) !important;
    transform: translateX(calc(100% + 70px)) translateY(-5px);
  }
  .ck-content, .ck-editor__editable {
    background-color: ${WHITE};
    border: 1px solid ${SWISS_COFFEE} !important;
    box-shadow: none !important;
    font-family: Lato;
    font-size: 12px;
    font-weight: initial;
    height: 95px;
    outline: 0;
    overflow-y: auto !important;
    padding: 0 11px !important;
    &:focus {
      border: 1px solid ${PUERTO_RICO} !important;
    }
    & p {
      color: rgba(${MINE_SHAFT_RGB}, 0.51);
      letter-spacing: 1px;
      margin: 9px 0;
    }
    & h1 {
      color: ${MINE_SHAFT};
      font-size: 18px;
      font-weight: bold;
      margin: 9px 0;
    }
    & h2 {
      color: ${MINE_SHAFT};
      font-size: 14px;
      font-weight: bold;
      margin: 9px 0;
    }
    & h5 {
      color: rgba(${MINE_SHAFT_RGB}, 0.51);
      font-size: 9px;
      letter-spacing: 1px;
      margin: 9px 0;
    }
    & strong {
      font-weight: bold;
    }
    & i {
      font-style: italic;
    }
  }
  .ck.ck-button {
    font-size: 12px !important;
  }
  .ck.ck-toolbar .ck.ck-toolbar__separator {
    background-color: ${GRAY} !important;
    margin: 4px 0 !important;
  }
  .ck-dropdown__panel {
    background-color: ${WHITE} !important;
    border: 0 !important;
    box-shadow: 0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12), 0 1px 1px 0 rgba(${BLACK}, 0.14) !important;
  }
  .ck-dropdown__button > .ck-button__label {
    color: ${MINE_SHAFT} !important;
    font-family: Lato !important;
    font-size: 10px !important;
  }
  .ck-list__item > .ck-button {
    &:hover {
      background-color: ${GALLERY} !important;;
    }
  }
  .ck.ck-list__item .ck-button.ck-on {
    background-color: ${GALLERY} !important;;
    &:hover {
      background-color: ${GALLERY} !important;;
    }
  }
  .ck-list__item > .ck-button > .ck-button__label {
    color: ${MINE_SHAFT} !important;
    font-family: Lato !important;
    font-size: 12px !important;
  }
`;
