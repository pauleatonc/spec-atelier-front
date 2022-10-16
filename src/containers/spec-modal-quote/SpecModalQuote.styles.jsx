import styled from 'styled-components';
import {
  WHITE,
  PRIMARY,
  SECONDARY,
  MEDIA_QUERY_SMALL,
  MINE_SHAFT,
  JAVA,
  ALTO,
  CARIBBEAN_GREEN,
  BLACK,
  MINE_SHAFT_RGB,
  ALTO_OPACITY,
} from '../../config/constants/styled-vars';

const HEIGHT_CONTENT = '350px';
const PADDING_CONTENT = '8px 2px 8px 8px';

export const Container = styled.div`
  width: 80%;
  height: 500px;
  padding: 20px;
  background-color: ${WHITE};
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
`;

export const HeaderProduct = styled.section`
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
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.17px;
  color: ${MINE_SHAFT};
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
  overflow-y: auto;
`;

export const ImagesContent = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 2px solid;
  width: 100%;
  border-color: ${({ active }) => (active ? PRIMARY : 'transparent')};
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const ProductImageSelectedContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex: 3;
  padding: 16px;
  display: flex;
  min-height: 200px;
`;

export const ProductImageSelected = styled.div`
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
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
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  font-weight: bold;
`;

export const ProductDescription = styled.div`
  margin: 16px 0px 8px;
  font-size: 12px;
  overflow-y: auto;
  height: 100%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
`;

export const ProductBrand = styled.div`
  margin: 8px 0px;
  color: ${MINE_SHAFT};
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
  color: ${WHITE};
  border-radius: 16px;
  padding: 8px 28px;
  background-color: ${SECONDARY};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ProductSection = styled.div`
  width: 50%;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    height: 250px;
  }
`;

export const ContactSection = styled.div`
  width: 50%;
  height: 355px;
  @media (max-width: 400px) {
    margin-top: 10px !important;
    width: 100% !important;
    text-align: center !important;
    overflow: auto !important;
    height: 198px !important;
  }
  ${MEDIA_QUERY_SMALL} {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    overflow: auto;
    height: 328px;
  }
`;

export const TitleContact = styled.span`
  width: 561px;
  height: 29px;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: var(--black);
`;

export const TitleProduct = styled.span`
  width: 100%;
  height: 29px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
`;

export const TitleGroup = styled.label`
  width: 50px;
  height: 15px;
  opacity: 0.49;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: var(--black);
`;

export const GroupInput = styled.div`
  display: grid;
  width: 100%;
  margin-top: 18px;
`;

export const GroupTitle = styled.div`
  display: grid;
  width: 100%;
  ${MEDIA_QUERY_SMALL} {
    text-align: center;
  }
`;

export const ButtonQuote = styled.button`
  width: 182px;
  height: 34px;
  padding: 6px 20px 9px 21px;
  border-radius: 19.5px;
  border-color: ${JAVA};
  border: none;
  background-color: ${JAVA};
  margin-top: 17px;
  float: right;
`;

export const TitleButton = styled.span`
  width: 141px;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${WHITE};
`;

export const ContentProduct = styled.div`
  width: 90%;
  height: 275px;
  padding: 0 0 31px;
  border-radius: 9px;
  display: flex;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
  }
`;

export const ContentImage = styled.div`
  width: 40%;
  margin-top: 80px;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const ContentDataProduct = styled.div`
  width: 100%;
  margin-top: 25px;
  overflow: auto;
  display: grid;
  ${MEDIA_QUERY_SMALL} {
    text-align: center;
  }
`;

export const TitleProductName = styled.span`
  width: 268px;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.92px;
  color: var(--black);
  margin-top: 10px;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
  }
`;

export const ProductDesc = styled.span`
  width: 292px;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.83px;
  color: rgba(${MINE_SHAFT_RGB}, 0.51);
  margin-top: 10px;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
  }
`;

export const ProductSpan = styled.span`
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.83px;
  color: var(--black);
  margin-top: 10px;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
  }
`;

export const TextAreaForm = styled.textarea`
  width: 98%;
  border-radius: 5px;
  padding-left: 2px;
  padding-top: 9px;
  flex: 1;
  font-size: 12px;
  letter-spacing: 1px;
  resize: none;
  :focus-visible {
    outline: none;
  }
  margin-top: 4px;
  border-color: ${({ isRequired }) => (isRequired ? 'red' : ALTO)};
  &:active,
  &:focus {
    border: solid 1px ${CARIBBEAN_GREEN};
  }
`;

export const TableInput = styled.input`
  border-style: none;
  outline: none;
  width: 98%;
  border-bottom: solid 1px rgba(${BLACK}, 0.28);
  padding: 10.6px 13px 5.4px 0px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  caret-color: ${CARIBBEAN_GREEN};
  letter-spacing: 1.17px;
  &:active,
  &:focus {
    border-bottom: solid 1px ${CARIBBEAN_GREEN};
  }
  border-color: ${({ isRequired }) => (isRequired ? 'red' : ALTO)};
`;

export const MessageRequired = styled.p`
  font-size: 12px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: red;
  height: 15px;
`;

export const Root = styled.div`
  background-color: ${WHITE};
  border: 1px solid ${ALTO};
  border-radius: 9px;
  display: inline-grid;
  grid-template-rows: 146px 43px;
  height: 148px;
  margin: 0 0 16px;
  margin-top: 75px;
  overflow: visible;
  position: relative;
  width: 100%;
  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    margin-top: 35px;
  }
`;

export const Content2 = styled.div`
  display: grid;
  grid-template-columns: 105px auto;
  overflow: hidden;
`;

export const Photo = styled.section`
  background-color: ${ALTO_OPACITY};
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 9px 0px 0px 9px;
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px 15px 15px;
`;

const BaseDetails = styled.p`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin: 0 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title2 = styled(BaseDetails)`
  color: ${MINE_SHAFT};
  font-size: 11px;
  letter-spacing: 0.92px;
`;

export const Description = styled(BaseDetails)`
  color: rgba(${MINE_SHAFT_RGB}, 0.51;
  font-size: 10px;
  letter-spacing: 0.83px;
  -webkit-line-clamp: 3;
`;

export const Category = styled.p`
  color: ${MINE_SHAFT};
  font-size: 10px;
  letter-spacing: 0.83px;
  margin: auto 0 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Reference = styled.p`
  color: ${MINE_SHAFT};
  font-size: 10px;
  letter-spacing: 0.83px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
