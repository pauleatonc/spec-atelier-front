import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  WHITE,
  MINE_SHAFT,
  MERCURY,
  MEDIA_QUERY_SMALL,
  SHADOW_GREY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: ${WHITE};
  box-shadow: ${SHADOW_GREY}
  display: ${({ show = false }) => (show ? 'initial' : 'none')};
  height: calc(100vh - 122px);
  left: 0;
  position: absolute;
  top: 0;
  width: calc(100vw - 69px);
  z-index: 1;

  ${MEDIA_QUERY_SMALL} {
    width: 100vw;
    height: 100vh;
    top: -35px;
  }
`;

export const Overlay = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 0;
`;

Root.propTypes = {
  show: PropTypes.bool.isRequired,
};

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${MERCURY};
  color: ${MINE_SHAFT};
  font-size: 13px;
  font-weight: bold;
  height: 46px;
  padding: 0 23px;
  width: 100%;
  flex-wrap: wrap;
  ${MEDIA_QUERY_SMALL} {
    justify-content: flex-start;
    height: 104px;
  }
`;

export const ButtonBack = styled.div`
  display: none;
  width: 27px;
  heigth: 27px;
  margin-right: 16px;
  ${MEDIA_QUERY_SMALL} {
    display: flex;
  }
`;

export const Title = styled.section`
  display: flex;
  align-items: center;
  height: 46px;
  letter-spacing: 1.08px;
  padding: 0 23px;
  ${MEDIA_QUERY_SMALL} {
    padding: 0;
  }
`;

export const Panels = styled.section`
  display: flex;
  height: calc(100% - 46px);
  width: 100%;
`;

export const Filters = styled.section`
  border-right: 1px solid ${MERCURY};
  display: flex;
  height: 100%;
  position: relative;
  width: 360px;

  ${MEDIA_QUERY_SMALL} {
    display: ${({ showFilters }) => (showFilters ? 'flex' : 'none')};
    position: absolute;
    top: 50px;
    height: 100vh;
    width: 100vw;
    z-index: 10;
  }
`;
