import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Root = styled.div`
  height: 30px;
  position: relative;
  width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
  width: PropTypes.string.isRequired,
};

export const Line = styled.div`
  background-color: rgba(151,151,151,0.32);
  bottom: 0;
  height: 4px;
  left: 0;
  margin: auto 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Bubbles = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BubbleInactive = styled.div`
  background-color: #FFF;
  border: 1px solid rgba(151,151,151,0.32);
  border-radius: 50%;
  height: 30px;
  margin: 0 57px 0 0;
  min-width: 30px;
  width: 30px;
`;

export const BubbleActive = styled.div`
  background-color: #00BFA8;
  border-radius: 50%;
  cursor: ${({ onClick = undefined }) => onClick ? 'pointer' : 'default'};
  display: inline-flex;
  height: 30px;
  justify-content: center;
  margin: 0 42px 0 0;
  min-width: 30px;
  width: 30px;

  &:active {
    transform: scale(.95);
  }
`;

BubbleActive.defaultProps = {
  onClick: undefined,
};
BubbleActive.propTypes = {
  onClick: PropTypes.func,
};

export const BubbleText = styled.span`
  color: #FFF;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.75;
`;
