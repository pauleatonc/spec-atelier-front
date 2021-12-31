import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  align-items: center;
  background-color: ${({ overlay = true }) => overlay ? 'rgba(59, 59, 59, .54)' : 'rgba(59, 59, 59, 0)'};
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  overflow-y: auto;
  padding: 20px;
`;

Root.propTypes = {
  overlay: PropTypes.bool.isRequired,
};

export default Root;
