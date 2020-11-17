import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${COLOR_MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  background-color: transparent;
  border: 1px solid #D6D6D6;
  border-radius: 4px;
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  min-height: ${({ minHeightTextArea }) => minHeightTextArea};
  padding: 11px 19px;
  resize: none;
  width: 100%;

  &:active, &:focus {
    outline: 0;
  }

  &::placeholder {
    color: rgba(33, 33, 33, 0.46);
  }
`;

Textarea.propTypes = { 
  minHeightTextArea: PropTypes.string,
};

Textarea.defaultProps = { 
  minHeightTextArea: '152px',
};