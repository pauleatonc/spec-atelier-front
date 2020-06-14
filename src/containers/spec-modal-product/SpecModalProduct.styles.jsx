import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  COLOR_WHITE,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  MEDIA_QUERY_SMALL,
  COLOR_BLACK,
} from '../../config/constants/styled-vars';

import IconDwg from '../../assets/images/icons/dwg.svg';
import IconDwgActive from '../../assets/images/icons/dwg_active.svg';
import IconBim from '../../assets/images/icons/bim.svg';
import IconBimActive from '../../assets/images/icons/bim_active.svg';
import IconTech from '../../assets/images/icons/tech.svg';
import IconTechActive from '../../assets/images/icons/tech_active.svg';

const icons = {
  'dwg': `url('${IconDwg}')`,
  'dwg_active': `url('${IconDwgActive}')`,
  'bim': `url('${IconBim}')`,
  'bim_active': `url('${IconBimActive}')`,
  'tech': `url('${IconTech}')`,
  'tech_active': `url('${IconTechActive}')`,
}

const HEIGHT_CONTENT = '350px';
const PADDING_CONTENT = '8px 2px 8px 8px';

export const Container = styled.div`
  background-color: ${COLOR_WHITE};
  border-radius: 4px;
  min-height: ${HEIGHT_CONTENT};
  ${MEDIA_QUERY_SMALL} {
    border-radius: 0;
    height: 100%;
    padding: 5px;
  }
`;

export const Content = styled.section`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  flex-direction: column;
  letter-spacing: 1px;
  font-family: Lato;
`;

export const Header = styled.section`
  padding: ${PADDING_CONTENT};
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  padding: 0 8px 8px 0;
  width: 318px;
  height: 17px;
  height: 17px;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.17px;
  color: ${COLOR_BLACK};
  ${MEDIA_QUERY_SMALL} {
    padding: 0px 20px 0px 0px;
  }
`;

export const Section = styled.section`
  display: flex;
  height: ${HEIGHT_CONTENT};
  padding: ${PADDING_CONTENT};
  ${MEDIA_QUERY_SMALL} {
    height: 100%;
    flex-direction: column;
  }
`;

export const ImagesContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
`

export const ImagesContent = styled.div`
  -webkit-justify-content: center;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const ProductImage = styled.img`
  cursor: pointer;
  max-height: 80px;
  max-width: 100%;
  ${active => active && `border: 2px solid; border-color: ${COLOR_PRIMARY};`}}
`;

export const ProductImageSelectedContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex: 3;
  padding: 16px;
  display: flex;
  min-height: 200px;
`;

export const ProductImageSelected = styled.img`
  object-fit: scale-down;
  max-width: auto;
  max-height: 250px;
`;

export const InfoContainer = styled.section`
  flex: 3;
  display: flex;
  padding: ${PADDING_CONTENT};
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
    min-height: ${HEIGHT_CONTENT};
    margin-bottom: 35px;
  }
`;

export const InfoContent = styled.section`
  flex-direction: column;
  flex: 1;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.83px;
`;

export const ProductName = styled.div`
  font-family: Lato;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
  font-weight: bold;
`;

export const ProductDescription = styled.div`
  margin: 16px 0px 8px;
  font-size: 12px;
  overflow-y: auto;
  height: 100%;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;

export const ProductBrand = styled.div`
  margin: 8px 0px;
  color: ${COLOR_BLACK};
  font-family: Lato;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.83px;
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;
`;

export const ButtonContact = styled.input`
  outline: none;
  cursor: pointer;
  color: ${COLOR_WHITE};
  border-radius: 16px;
  padding: 8px 28px;
  background-color: ${COLOR_SECONDARY};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Icons = styled.section`
  display: flex;
  align-items: center;
  margin: 8px auto;
`;

export const Icon = styled.span`
  width: 28px;
  height: 28px;
  margin: auto;
  background-position: center center;
  background-repeat: no-repeat;
  display: ${({ active }) => active ? 'block' : 'none'};
  cursor: pointer;
  background-image: ${({ type }) => icons[type]};
  &:hover {
    background-image: ${({ active, type }) => active && icons[`${type}_active`]};
  }
`;

Icon.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['dwg', 'bim', 'tech']),
};

Icon.defaultProps = {
  active: false,
  type: 'dwg',
};





