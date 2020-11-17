import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Root = styled.div`
  align-items: center;
  background-color: #FFF;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.27);
  display: grid;
  height: 201px;
  justify-content: center;
  width: 56px;
  z-index: 2;
`;

export const Section = styled.section`
  width: 100%;
`;

export const NavIcon = styled.span`
  background-image: url('${({ src }) => src}');
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  display: block;
  height: 28px;
  width: 28px;

  &:hover {
    background-image: url('${({ srcActive }) => srcActive}');
  }
`;

NavIcon.propTypes = {
  src: PropTypes.string.isRequired,
  srcActive: PropTypes.string.isRequired,
};
