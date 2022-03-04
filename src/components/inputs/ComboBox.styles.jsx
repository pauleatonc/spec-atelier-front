import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ALTO,
  DUSTY_GRAY,
  GALLERY,
  MINE_SHAFT,
  MINE_SHAFT_RGB,
  SILVER
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${MINE_SHAFT};
  display: block;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${DUSTY_GRAY};
  border-radius: 9px;
  color: ${MINE_SHAFT};
  cursor: pointer;
  display: inline-flex;
  height: 38px;
  font-size: 12px;
  letter-spacing: 1px;
  overflow: hidden;
  padding: 0 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  &:active, &:focus {
    outline: 0;
  }
  &::placeholder {
    color: rgba(${MINE_SHAFT_RGB}, 0.46);
  }
  &:disabled {
    background-color: ${ALTO};
    cursor: not-allowed;
  }
`;

export const InputUnderline = styled(Input)`
  border: 0; 
  outline: 0;
  min-width: 140px;
  display:flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 2px solid ${SILVER};
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  border-radius: 0;
`;

export const Options = styled.section`
  background-color: transparent;
  border: ${({ type = 'default' }) => type === 'default' ? `1px solid ${DUSTY_GRAY}` : 'none'};
  border-radius: 9px;
  margin: 5px 0 0;
  max-height: 200px;
  overflow-y: auto;
`;

Options.defaultProps = {
  type: 'default',
};
Options.propTypes = {
  type: PropTypes.oneOf(['default', 'underline', 'list']),
};

export const Option = styled.section`
  align-items: center;
  color: ${MINE_SHAFT};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 16px;
  width: 100%;
  &:hover {
    background-color: ${GALLERY};
  }
  &:first-child {
    margin: 6px 0 0;
  }
  &:last-child {
    margin: 0 0 6px;
  }
`;

export const OptionCheckboxIcon = styled.img`
  height: 18px;
  margin: 0 8px 0 0;
  width: 18px;
`;

export const OptionText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Actions = styled.section`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
`;
