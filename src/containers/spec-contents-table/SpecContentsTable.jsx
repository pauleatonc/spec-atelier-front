import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
	Root,
    ContentTable,
    Header,
    Table,
    TR,
    TD,
    TH
} from './SpecContentsTable.styles';


const SpecContentsTable = () => {

    return (
        <Root>
            <ContentTable>
                <Header>Itemizado y presupuesto</Header>
                <Table>
                    <TR>
                        <TH>Item</TH>
                        <TH>Descripción</TH>
                        <TH>Unidad</TH>
                        <TH>Cantidad</TH>
                        <TH>Subtotal</TH>
                    </TR>
                </Table>
            </ContentTable>
        </Root>
    )
};

export default SpecContentsTable;