import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_MINE_SHAFT, COLOR_GREY } from '../../config/constants/styled-vars';

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  color: ${COLOR_MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Box = styled.div`
  border: 2px dotted #E0E0E0;
  border-radius: 4px;
  height: 175px;
  width: 100%;
`;

export const DropIcon = styled.img`
  margin: ${({ margin = '0' }) => margin};
  pointer-event: none;
  user-select: none;
`;

DropIcon.propTypes = {
  margin: '0',
};
DropIcon.propTypes = {
  margin: PropTypes.string,
};

export const Empty = styled.div`
  display: grid;
  grid-template-rows: 103px auto;
  width: 100%;
`;

export const EmptyHeader = styled.section`
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

export const EmptyBody = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const EmptyAction = styled.span`
  color: #00BFA8;
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  margin: 0 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const EmptyText = styled.span`
  color: rgba(33, 33, 33, 0.44);
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.75px;
  pointer-event: none;
  user-select: none;
  text-align: center;
`;

export const List = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding: 8px 0;
  width: 100%;
`;

const border = `
  border: 1px solid ${COLOR_GREY};
  border-radius: 8px;
  margin: 2px;
`;

export const Item = styled.section`
  align-items: center;
  background-color: transparent;
  display: flex;
  grid-template-columns: 40px auto 30px;
  height: 50px;
  padding: 8px 10px;
  position: relative;
  width: 100%;
  min-width: 0;
  ${({ bordered }) => bordered ? border : '' }

  &:hover {
    background-color: #EEE;
  }
`;

export const ItemDetails = styled.div`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 0 10px;
  width: 100%;
`;

export const ItemText = styled.p`
  color: ${COLOR_MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 0 3px;
  opacity: 0.5;
  overflow: hidden;
  pointer-event: none;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: 100%;

  &:last-child {
    margin: 0;
  }
`;

export const RemoveIcon = styled.img`
  cursor: pointer;
`;

export const Action = styled.div`
  color: #00BFA8;
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  margin: 17px 0 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropContent = styled.div`
  background-color: #FAFAFA;
  border-radius: 5px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);
  display: grid;
  height: 342px;
  padding: 66px 32px 29px;
  position: relative;
  width: 668px;
`;

export const DropCloseIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 11px;
  top: 11px;
`;

export const DropZone = styled.div`
  background-color: #FAFAFA;
  border: 1px dashed #979797;
  height: 100%;
  width: 100%;
`;

export const DropZoneSection = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ padding = 'initial' }) => padding};
  width: 100%;
`;

DropZoneSection.defaultProps = {
  padding: 'initial',
};
DropZoneSection.propTypes = {
  padding: PropTypes.string,
};

export const DropZoneText = styled.p`
  color: #797979;
  font-family: Lato;
  font-size: 16px;
  letter-spacing: 0.57px;
  line-height: 1.69;
  margin: 0;
  pointer-event: none;
  user-select: none;
`;
