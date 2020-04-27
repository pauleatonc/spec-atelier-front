import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  display: ${({ show = false }) => show ? 'initial' : 'none'};
  height: 100%;
  position: relative;
  width: 360px;
`;

Root.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Root;
