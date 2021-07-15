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
    width: 587px;
`;

export const Header = styled.div`
    width: 828px;
    height: 1px;
    margin: 0 0 16px;
    background-color: rgba(0, 0, 0, 0.12);
`;

export const Table = styled.table`
    width: 100%;
    height: 597px;
    border-radius: 2px;
    border: solid 1px #e9e9e9;
    background-color: #ffffff;
`;

export const TD = styled.td`
    border: 1px solid #dddddd;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const TH = styled.th`
    width: 110px;
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

export const TR = styled.td`
    padding: 8px;
`;
