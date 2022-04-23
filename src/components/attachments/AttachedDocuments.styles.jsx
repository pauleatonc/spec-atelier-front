import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ALABASTER,
  ALTO,
  BLACK,
  BOULDER,
  CARIBBEAN_GREEN,
  DUSTY_GRAY,
  GALLERY,
  MINE_SHAFT,
  MINE_SHAFT_RGB,
  SILVER_CHALICE,
} from 'config/constants/styled-vars';

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  color: ${MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Box = styled.div`
  border: 2px dotted ${ALTO};
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
  color: ${CARIBBEAN_GREEN};
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
  color: rgba(${MINE_SHAFT_RGB}, 0.44);
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
  border: 1px solid ${SILVER_CHALICE};
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
  ${({ bordered }) => (bordered ? border : '')}
  &:hover {
    background-color: ${GALLERY};
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
  color: ${MINE_SHAFT};
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
  color: ${CARIBBEAN_GREEN};
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
  background-color: ${ALABASTER};
  border-radius: 5px;
  box-shadow: 0 11px 15px -7px rgba(${BLACK}, 0.2),
    0 9px 46px 8px rgba(${BLACK}, 0.12), 0 24px 38px 3px rgba(${BLACK}, 0.14);
  display: grid;
  height: 342px;
  padding: 20px;
  position: relative;
  width: 668px;
`;

export const DropZone = styled.div`
  background-color: ${ALABASTER};
  border: 1px dashed ${DUSTY_GRAY};
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
  color: ${BOULDER};
  font-family: Lato;
  font-size: 16px;
  letter-spacing: 0.57px;
  line-height: 1.69;
  margin: 0;
  pointer-event: none;
  user-select: none;
`;
