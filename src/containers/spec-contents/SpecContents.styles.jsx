import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: ${COLOR_WHITE};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  display: ${({ show = false }) => show ? 'initial' : 'none'};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 360px;
`;

Root.defaultProps = {
  show: false,
};
Root.propTypes = {
  show: PropTypes.bool,
};
