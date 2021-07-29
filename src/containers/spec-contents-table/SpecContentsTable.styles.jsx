import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
	box-sizing: border-box;
    display: -webkit-box;
	height: 100%;
    position: relative;
    width: 100%;
    margin-bottom: 1%;
`;

export const ContentTable = styled.div`
    position: relative; 
    margin-left: auto;
    margin-right: auto;
    width: 970px;
    height: 597px;
`;

export const Header = styled.div`
    width: 100%;
    height: 46px;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 3%;
    padding-bottom: 4%;
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    background-color: rgba(255, 255, 255);
    border-radius: 2px;
    border: solid 1px #e9e9e9;
`;

export const TableFooter = styled.div`
    width: 970px;
    height: 51px;
    padding: 17px 72px 12px 24px;
    background-color: rgba(0, 196, 172, 0.06);
    display: flex;
    border-radius: 2px;
    border: solid 1px #e9e9e9;
`;

export const TableElements = styled.h1`
    width: 515px;
    height: 17px;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.87);
`;

export const TableTotal = styled.h1`
    width: 80px;
    height: 17px;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.87);
    float: right;
`;

export const Title = styled.div`
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    float: left;
`;

export const ButtonsHeader = styled.div`
    font-family: Lato;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    display: flex;
    float: right;
`;
export const Button = styled.div`
    cursor: pointer;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00c3ac;
    height: 20px;
    display: flex;
`;
export const ImgButton = styled.img`
    margin: 0px 5px 0px 39px;
`;

export const ImgSubtotal = styled.img`
    cursor: pointer;
    height: 24px;
    margin-left: 33%;
`;

export const ImgExpanderAll = styled.img`
    display: none;
`;
export const Table = styled.table`
    width: 100%;
    border-radius: 2px;
    border: solid 1px #e9e9e9;
    background-color: #ffffff;
`;
export const THEAD = styled.thead`
    padding: 8px;
    height: 46px;
    text-align: left;
`;
export const TBODY = styled.tbody`
    width: 2px;
    height: 46px;
    text-align: left;
`;

export const TR = styled.tr`
    height: 5px;
`;

export const TD = styled.td`
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 20px;
    width: 20px;
    font-family: Lato;
    font-size: 12px;
    font-weight: ${({ isTypeUnity }) => (isTypeUnity ? 'normal' : 'bold')};
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.87);
`;

export const TH = styled.th`
    padding: 2%;
    width: auto;
    height: 15px;
    margin: 24px 31px 36px 0;
    font-family: Lato;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.54);
`;

export const TableInput = styled.input`
    border-style: none;
    width: 56px;
    border-bottom: solid 1px rgb(187 187 187);
`;

export const ButtonConsult = styled.div`
    cursor: pointer;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00c3ac;
    height: 20px;
    float: right;
    margin-right: 40%;
`;