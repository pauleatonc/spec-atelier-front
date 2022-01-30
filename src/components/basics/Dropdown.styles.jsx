import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SILVER, WHITE, BLACK } from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: transparent;
  bottom: 0;
  display: ${({ open = false }) => open ? 'initial' : 'none'};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

Root.propTypes = {
  open: PropTypes.bool.isRequired,
};

export const Content = styled.div`
  background-color: ${WHITE};
  box-shadow: ${({ boxShadow = `0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12), 0 1px 1px 0 rgba(${BLACK}, 0.14)`}) => boxShadow};
  border: 1px solid ${SILVER};
  display: inline-flex;
  flex-direction: column;
  max-height: ${({ maxHeight = 'initial' }) => maxHeight};
  overflow-y: auto;
  transform-origin: 0 0;
  transform: ${({ translateX = 0, translateY = 0 }) => `translateX(${translateX}px) translateY(${translateY}px)`};
  visibility: ${({ show = false }) => show ? 'visible' : 'hidden'};
  width: ${({ width = 'initial' }) => width};
`;

Content.propTypes = {
  boxShadow: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
};
