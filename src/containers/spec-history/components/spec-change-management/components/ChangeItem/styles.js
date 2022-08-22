import styled from 'styled-components';
import {
  CONCRETE,
  PUERTO_RICO_RGBA_OPACITY,
  PUERTO_RICO_RGBA_OPACITY_HOVER,
  BURN_SIENNA_RGBA_OPACITY,
  BURN_SIENNA_RGBA_OPACITY_HOVER,
  SUPERNOVA_RGBA_OPACITY,
  SUPERNOVA_RGBA_OPACITY_HOVER,
  JAVA,
  PUERTO_RICO,
  SUPERNOVA,
  BURNT_SIENNA,
  BOULDER,
  HEX_BLACK,
  WHITE,
  BLACK_OPACITY,
  GRAY_OPACITY,
} from '../../../../../../config/constants/styled-vars';

export const TYPES = {
  SECTION: 'Section',
  ITEM: 'Item',
  PRODUCT: 'Product',
  TEXT: 'Text',
  IMAGE: 'Image'
};

export const SIZES = {
  [TYPES.SECTION]: '16',
  [TYPES.ITEM]: '14',
  [TYPES.PRODUCT]: '12',
  [TYPES.TEXT]: '12',
  [TYPES.IMAGE]: '12',
};

const headerPadingLeft = {
  [TYPES.SECTION]: '35px',
  [TYPES.ITEM]: '35px',
  [TYPES.PRODUCT]: '53px',
  [TYPES.TEXT]: '75px',
  [TYPES.IMAGE]: '75px',
};

const headerFontWeight = {
  [TYPES.SECTION]: 'bold',
  [TYPES.ITEM]: 'bold',
  [TYPES.PRODUCT]: 'normal',
  [TYPES.TEXT]: 'normal',
  [TYPES.IMAGE]: 'normal',
};

export const ACTION_TYPE_BACKGROUND = {
  add: {
    normal: PUERTO_RICO_RGBA_OPACITY,
    hover: PUERTO_RICO_RGBA_OPACITY_HOVER,
    border: PUERTO_RICO,
  },
  remove: {
    normal: BURN_SIENNA_RGBA_OPACITY,
    hover: BURN_SIENNA_RGBA_OPACITY_HOVER,
    border: BURNT_SIENNA,
  },
  edit: {
    normal: SUPERNOVA_RGBA_OPACITY,
    hover: SUPERNOVA_RGBA_OPACITY_HOVER,
    border: SUPERNOVA,
  },
};

export const expandableContainer = ({status, isOwner, type}) =>
  [TYPES.PRODUCT, TYPES.TEXT, TYPES.IMAGE].includes(type) && status === 'waiting'  && isOwner

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ action, status, isExpanded, isOwner, type }) => {
    const isExpandedBackground = isExpanded ? WHITE : CONCRETE;
    return expandableContainer({status, isOwner, type}) && !isExpanded
      ? `${ACTION_TYPE_BACKGROUND[action].normal}`
      : isExpandedBackground;
  }};
  height: auto;
  margin-bottom: ${({ type }) => (type === TYPES.ITEM ? '12px' : '5px')};
  margin-top: ${({ type }) => (type === TYPES.SECTION ? '12px' : '0px')};
  border: ${({ action, isExpanded }) =>
    isExpanded ? `solid 2px ${ACTION_TYPE_BACKGROUND[action].border}` : 'none'};

  &:hover {
    background-color: ${({ action, status, isExpanded, isOwner, type }) => {
      const isExpandedBackground = isExpanded ? WHITE : CONCRETE;
      return expandableContainer({status, isExpanded, isOwner, type}) && !isExpanded
        ? `${ACTION_TYPE_BACKGROUND[action].hover}`
        : isExpandedBackground;
    }};
    box-shadow: ${({ type, status, isOwner }) =>
      expandableContainer({status, isOwner, type}) && `0 1px 4px 0 ${BLACK_OPACITY}`};
  }
`;

export const HeaderChange = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ isExpanded }) =>
    isExpanded ? 'flex-end' : 'space-between'};
  padding-right: 30px;
  padding-left: ${({ type }) => headerPadingLeft[type]};
  width: 100%;
  height: 32px;
  font-size: ${({ type }) => `${SIZES[type]}px`};
  font-weight: ${({ type }) => headerFontWeight[type]};
  cursor: ${({ type, status, isOwner }) =>
    expandableContainer({status, isOwner, type})
      ? 'pointer'
      : 'initial'};
`;

export const IconTypeChange = styled.img`
  position: absolute;
  left: 11px;
  width: 16px;
  height: 16px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.span`
  font-size: 12px;
  color: ${BOULDER};
  margin-right: 25px;
`;

export const IconExpan = styled.i`
  color: ${JAVA};
  font-size: 14px;
`;

export const Spacer = styled.div`
  width: 12.25px;
`;

export const ChangeInfo = styled.div`
  display: flex;
  width: 100%;
`;

export const DetailsChange = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 30px 30px 50px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const DescChange = styled.div`
  width: 75%;
  padding-right: 40px;
`;

export const ImgContainerChange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProductDescContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductImageContainer = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
`;

export const ImageProduct = styled.img`
  width: 200px;
  max-height: 260px;
  border-radius: 4px;
  margin-bottom: 5px;
  background-color: ${GRAY_OPACITY};
`;

export const GoToProduct = styled.span`
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  color: ${PUERTO_RICO};
`;

export const TextDesc = styled.span`
  font-size: 12px;
  color: ${({ bold }) => (bold ? HEX_BLACK : BOULDER)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin-left: ${({ mleft }) => mleft || '0px'};
  margin-bottom: ${({ mBottom }) => mBottom || '0px'};
  width: ${(fullwidth) => (fullwidth ? '100%' : 'auto')};
  max-height: 150px;
  overflow: ${({ withOverFlow }) => withOverFlow && 'auto'};
`;

export const IconAction = styled.i`
  color: ${({ color }) => color};
  font-size: 16px;
  margin-right: 90px;
`;

export const ElementTitle = styled.span`
  color: ${HEX_BLACK};
`;

export const BlurryTitle = styled.span`
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
