import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
	Root,
    AddIcon,
    ContentButton
} from './SpecContentsButtons.styles';
import { requestFile } from './SpecContentsButtons.actions';
import specAddSource from '../../assets/images/icons/ic-page.svg';
import specAddSourceW from '../../assets/images/icons/ic-table.svg';


const SpecContentButtons = () => {
    const dispatch = useDispatch();
    const {dataSection} = useSelector(state => state);
    const handdleShowTable = (option) => {
        dispatch(requestFile({option:option}));
    }
    return (
        <Root>
            <ContentButton>
                <AddIcon
                    alt="Listar tabla"
                    src={specAddSourceW}
                    onClick={(e)=> handdleShowTable('T')}
                />
                <AddIcon
                    alt="Listar archivo"
                    src={specAddSource}
                    onClick={(e)=> handdleShowTable('F')}
                />
            </ContentButton>
        </Root>
    )
};

export default SpecContentButtons;