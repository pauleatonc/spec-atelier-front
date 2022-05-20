import styled from 'styled-components';
import {
  CONCRETE,
  BACKGROUND_ADD,
  BACKGROUND_ADD_HOVER,
  BACKGROUND_REMOVE,
  BACKGROUND_REMOVE_HOVER,
  BACKGROUND_EDIT,
  BACKGROUND_EDIT_HOVER,
  JAVA,
  PUERTO_RICO,
  SUPERNOVA,
  BURNT_SIENNA,
  BOULDER,
  HEX_BLACK,
  WHITE,
} from '../../../../../../config/constants/styled-vars';

export const TYPES = {
  SECTION: 'Section',
  ITEM: 'Item',
  PRODUCT: 'Product',
};

export const SIZES = {
  [TYPES.SECTION]: '16',
  [TYPES.ITEM]: '14',
  [TYPES.PRODUCT]: '12',
};

export const ACTION_TYPE_BACKGROUND = {
  add: {
    normal: BACKGROUND_ADD,
    hover: BACKGROUND_ADD_HOVER,
    border: PUERTO_RICO,
  },
  remove: {
    normal: BACKGROUND_REMOVE,
    hover: BACKGROUND_REMOVE_HOVER,
    border: BURNT_SIENNA,
  },
  edit: {
    normal: BACKGROUND_EDIT,
    hover: BACKGROUND_EDIT_HOVER,
    border: SUPERNOVA,
  },
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ action, status, isExpanded, isOwner }) => {
    const isExpandedBackground = isExpanded ? WHITE : CONCRETE;
    return status === 'waiting' && !isExpanded && isOwner
      ? `${ACTION_TYPE_BACKGROUND[action].normal}`
      : isExpandedBackground;
  }};
  height: auto;
  margin-bottom: ${({ type }) => (type === TYPES.ITEM ? '12px' : '5px')};
  margin-top: ${({ type }) => (type === TYPES.SECTION ? '12px' : '0px')};
  border: ${({ action, isExpanded }) =>
    isExpanded ? `solid 2px ${ACTION_TYPE_BACKGROUND[action].border}` : 'none'};

  &:hover {
    background-color: ${({ action, status, isExpanded, isOwner }) => {
      const isExpandedBackground = isExpanded ? WHITE : CONCRETE;
      return status === 'waiting' && !isExpanded && isOwner
        ? `${ACTION_TYPE_BACKGROUND[action].hover}`
        : isExpandedBackground;
    }};
    box-shadow: ${({ type, status, isOwner }) =>
      type === TYPES.PRODUCT &&
      status === 'waiting' &&
      isOwner &&
      '0 1px 4px 0 rgba(0, 0, 0, 0.25)'};
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
  padding-left: ${({ type }) => (type !== TYPES.PRODUCT ? '35px' : '53px')};
  width: 100%;
  height: 32px;
  font-family: Lato;
  font-size: ${({ type }) => `${SIZES[type]}px`};
  font-weight: ${({ type }) => (type !== TYPES.PRODUCT ? 'bold' : 'normal')};
  cursor: ${({ type, status, isOwner }) =>
    type === TYPES.PRODUCT && status === 'waiting' && isOwner
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
`;

export const DescChange = styled.div`
  width: 75%;
  margin-bottom: 30px;
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

export const IconCheck = styled.i`
  color: ${JAVA};
  font-size: 16px;
  margin-right: 90px;
`;
