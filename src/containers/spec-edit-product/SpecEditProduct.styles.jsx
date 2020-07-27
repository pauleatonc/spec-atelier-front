import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_MINE_SHAFT, COLOR_WHITE } from '../../config/constants/styled-vars';


export const Root = styled.div`
  background-color: #FAFAFA;
  border-radius: 5px;
  box-shadow: ${({ shadow = true }) => shadow ? '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)' : 'none'};
  width: 80%;
  padding: 42px 32px 20px;
`;

export const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  width: 100%;
`;

Root.defaultProps = {
  shadow: true,
};
Root.propTypes = {
  shadow: PropTypes.bool,
};

export const Label = styled.div`
  width: 100%;
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 4px 0 6px;
`;

export const Loading = styled.div`
  align-items: center;
  color: ${COLOR_WHITE};
  display: flex;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  letter-spacing: 1px;
  width: 100%;
`;

export const Header = styled.section`
  align-items: center;
  border-bottom: 1px solid rgba(151, 151, 151, 0.32);
  display: flex;
  padding: 0 60px 0 40px;
  position: relative;
  width: 100%;
`;

export const Title = styled.span`
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const CloseIcon = styled.img`
  bottom: 0;
  cursor: pointer;
  margin: auto 0;
  position: absolute;
  right: 31px;
  top: 0;
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
`;

Section.defaultProps = {
  alignItems: 'initial',
  justifyItems:  'initial',
  display: 'block',
  gridGap: '12px',
  gridTemplateColumns: 'initial',
  gridTemplateRows: 'initial',
  padding: 'initial',
  width: '100%',
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
