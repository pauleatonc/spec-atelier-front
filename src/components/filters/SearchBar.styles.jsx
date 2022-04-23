import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  MEDIA_QUERY_SMALL,
  BLACK,
  CONCRETE,
  SILVER,
  MINE_SHAFT_RGB,
} from 'config/constants/styled-vars';

const justifyContentDefaultProps = {
  justifyContent: 'flex-start',
};
const justifyContentPropTypes = {
  justifyContent: PropTypes.oneOf(['flex-start', 'center']),
};

export const Root = styled.div`
  max-width: ${({ maxWidth = 'initial' }) => maxWidth};
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  max-width: 237px;
  height: 38px;
  box-shadow: 0 0 4px 0 rgba(${BLACK}, 0.25);
  border-radius: 5px;
  :hover {
    background-color: ${CONCRETE};
  }
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
    max-width: 100%;
    /* TODO: agregar cuando se agregue el filtro margin-right: 13px; */
  }
`;

Root.propTypes = {
  maxWidth: PropTypes.string.isRequired,
};

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  color: rgba(${MINE_SHAFT_RGB}, 0.45);
  font-family: Lato;
  font-size: 12px;
  height: 100%;
  letter-spacing: 1px;
  width: 100%;
  font-family: Lato;
  font-size: 12px;
  height: 100%;
  letter-spacing: 1px;
  outline: none;
  :focus::placeholder {
    color: transparent;
  }
  :placeholder {
    color: ${SILVER};
  }
`;

Input.defaultProps = justifyContentDefaultProps;
Input.defaultProps = { focus: 'true' };
Input.propTypes = justifyContentPropTypes;

export const SearchIcon = styled.img`
  bottom: 0;
  top: 0;
`;

SearchIcon.defaultProps = justifyContentDefaultProps;
SearchIcon.propTypes = justifyContentPropTypes;
