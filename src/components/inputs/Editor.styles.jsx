import styled, { createGlobalStyle } from 'styled-components';

export const Root = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: #212121;
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
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14) !important;
    transform: translateX(calc(100% + 70px)) translateY(-5px);
  }

  .ck-content, .ck-editor__editable {
    background-color: #FFF;
    border: 1px solid #D2CDCD !important;
    box-shadow: none !important;
    font-family: Lato;
    font-size: 12px;
    font-weight: initial;
    height: 95px;
    outline: 0;
    overflow-y: auto !important;
    padding: 0 11px !important;

    &:focus {
      border: 1px solid #3AC0AD !important;
    }

    & p {
      color: rgba(33, 33, 33, 0.51);
      letter-spacing: 1px;
      margin: 9px 0;
    }
  
    & h1 {
      color: #212121;
      font-size: 18px;
      font-weight: bold;
      margin: 9px 0;
    }
  
    & h2 {
      color: #212121;
      font-size: 14px;
      font-weight: bold;
      margin: 9px 0;
    }
  
    & h5 {
      color: rgba(33, 33, 33, 0.51);
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
    background-color: rgba(144, 144, 144, 0.37) !important;
    margin: 4px 0 !important;
  }

  .ck-dropdown__panel {
    background-color: #FFF !important;
    border: 0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14) !important;
  }

  .ck-dropdown__button > .ck-button__label {
    color: #212121 !important;
    font-family: Lato !important;
    font-size: 10px !important;
  }

  .ck-list__item > .ck-button {
    &:hover {
      background-color: #EEE !important;;
    }
  }

  .ck.ck-list__item .ck-button.ck-on {
    background-color: #EEE !important;;

    &:hover {
      background-color: #EEE !important;;
    }
  }

  .ck-list__item > .ck-button > .ck-button__label {
    color: #212121 !important;
    font-family: Lato !important;
    font-size: 12px !important;
  }
`;
