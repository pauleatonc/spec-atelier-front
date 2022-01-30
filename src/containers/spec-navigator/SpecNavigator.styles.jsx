import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BLACK,
	MEDIA_QUERY_SMALL, WHITE,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  align-items: center;
  background-color: ${WHITE};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(${BLACK}, 0.27);
  display: grid;
  height: 201px;
  justify-content: center;
  width: 56px;
  z-index: 2;

  ${MEDIA_QUERY_SMALL} {
    grid-row: 2;
    width: 100%;
    height: 65px;
    bottom: 0;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    position: fixed;
  }
`;

export const Section = styled.section`
  width: 100%;

  ${MEDIA_QUERY_SMALL} {
    width: auto;
  }
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
