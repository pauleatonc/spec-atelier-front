import React from 'react';
import styled from 'styled-components';
import { GALLERY, MINE_SHAFT } from 'config/constants/styled-vars';

const StyledInput = styled.input`
  border-radius: 22px;
  background-color: ${GALLERY};
  border: none;
  height: 36px;
  padding-left: 25px;
  width: 100%;
  margin-bottom: 23px;
  opacity: 0.5;
  font-family: 'Lato';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  &:focus {
    outline: none;
  }
`;

const TextInput = (props) => <StyledInput {...props} />;

export default TextInput;
