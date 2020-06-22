import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: ${COLOR_WHITE};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  display: ${({ show = false }) => show ? 'initial' : 'none'};
  height: 100%;
  width: 100%;
`;

Root.propTypes = {
  show: PropTypes.bool.isRequired,
};

export const Title = styled.section`
  align-items: center;
  display: flex;
  border-bottom: 1px solid #E5E5E5;
  color: #212121;
  font-family: Lato;
  font-size: 13px;
  font-weight: bold;
  height: 46px;
  letter-spacing: 1.08px;
  padding: 0 23px;
  width: calc(100vw - 62px);
`;

export const Panels = styled.section`
  display: flex;
  height: calc(100% - 46px);
  width: 100%;
`;

export const Filters = styled.section`
  border-right: 1px solid #E5E5E5;
  display: flex;
  height: 100%;
  position: relative;
  width: 360px;
`;
