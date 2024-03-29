import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  PRIMARY,
  SILVER_CHALICE,
  ALABASTER,
  BLACK,
  DUSTY_GRAY_OPACITY,
  MINE_SHAFT_RGB,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: ${ALABASTER};
  border-radius: 5px;
  box-shadow: ${({ shadow = true }) =>
    shadow
      ? `0 11px 15px -7px rgba(${BLACK}, 0.2), 0 9px 46px 8px rgba(${BLACK}, 0.12), 0 24px 38px 3px rgba(${BLACK}, 0.14)`
      : 'none'};
  width: 80%;
  padding: 20px;
  overflow-y: auto;
`;

export const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  width: 100%;
  min-height: 0;
  min-width: 0;
  padding: 8px 12px 8px 8px;
`;

export const ProductContent = styled.section`
  overflow: hidden;
  min-width: 0;
`;

Root.defaultProps = {
  shadow: true,
};
Root.propTypes = {
  shadow: PropTypes.bool,
};

export const Label = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 4px 0 12px;
`;

export const Header = styled.section`
  align-items: center;
  border-bottom: 1px solid ${DUSTY_GRAY_OPACITY};
  display: flex;
  padding: 0 60px 0 40px;
  position: relative;
  width: 100%;
`;

export const Body = styled.section`
  padding: 18px 40px 25px;
  width: 100%;
`;

export const Section = styled.section`
  align-items: ${({ alignItems = 'initial' }) => alignItems};
  display: ${({ display }) => display};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-gap: ${({ gridGap }) => gridGap};
  padding: ${({ padding }) => padding};
  justify-items: ${({ justifyItems }) => justifyItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection}` : ''};
`;

Section.defaultProps = {
  alignItems: 'initial',
  justifyItems: 'initial',
  display: 'block',
  gridGap: '12px',
  gridTemplateColumns: 'initial',
  gridTemplateRows: 'initial',
  padding: 'initial',
  width: '100%',
  height: 'auto',
  justifyContent: 'initial',
  flexDirection: undefined,
};
Section.propTypes = {
  alignItems: PropTypes.string,
  justifyItems: PropTypes.string,
  display: PropTypes.string,
  gridGap: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
};

export const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;
`;

export const Gap = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
`;

export const Text = styled.div`
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.63px;
  color: ${PRIMARY};
  margin: 12px 0;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
`;

export const SubtitleContent = styled.p`
  color: rgba(${MINE_SHAFT_RGB}, 0.44);
  font-size: 12px;
  letter-spacing: 0.75px;
  margin-bottom: 12px;
  margin-left: 8px;
`;

export const ContainerHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ImagesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 260px;
  border: dotted 1px ${SILVER_CHALICE};
`;

export const DocContainer = styled.div`
  margin: 8px 0;
  width: 100%;
  border: dotted 1px ${SILVER_CHALICE};
  height: 160px;
  overflow-y: auto;
`;

export const DocIcon = styled.div``;

export const DocContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DraggableImageContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
