import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Root = styled.div`
  background-color: transparent;
  bottom: 0;
  display: ${({ open = false }) => open ? 'initial' : 'none'};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

Root.propTypes = {
  open: PropTypes.bool.isRequired,
};

export const Content = styled.div`
  background-color: #FFF;
  border: 1px solid #CCC;
  display: inline-flex;
  flex-direction: column;
  transform-origin: 0 0;
  transform: ${({ translateX = 0, translateY = 0 }) => `translateX(${translateX}px) translateY(${translateY}px)`};
  width: ${({ width = 'initial' }) => width};
`;

Content.propTypes = {
  translateX: PropTypes.number.isRequired,
  translateY: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
};
