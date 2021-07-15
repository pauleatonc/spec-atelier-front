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

export const ContentButton = styled.div`
    position: relative; 
    margin-left: auto;
    margin-right: auto;
    width: 587px;
`;

export const AddIcon = styled.img`
    cursor: pointer;
    float: right;
	position: sticky;
	top: 8px;
    margin-left: 2%;
    width: 45px;
    height: 41px;
    padding: 9px 10px 8px 11px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(207, 200, 200, 0.5);
    background-color: #ffffff;
	&:active {
		transform: scale(0.95);
	}
`;