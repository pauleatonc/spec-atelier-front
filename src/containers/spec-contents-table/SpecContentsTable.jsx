import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useTable, useExpanded } from 'react-table';
import {
        Root,
        ContentTable,
        Header,
        Table,
        THEAD,
        TBODY,
        TR,
        TD,
        TH,
        Title,
        ButtonsHeader,
        Button,
        ImgButton,
        ImgSubtotal,
        ButtonConsult,
        TableFooter,
        TableElements,
        TableTotal
} from './SpecContentsTable.styles';
import specDownloadSource from '../../assets/images/icons/ic-download.svg';
import iconArrowDown from '../../assets/images/icons/blue-arrow-down.svg';
import iconArrowUp from '../../assets/images/icons/blue-arrow-up.svg';
import TableInput from './components/CurrentInputTable/index';
// import COLUMNS from './constants';

const SpecContentsTable = () => {
    const [ isClick, setClick ] = useState(false);
    const handdleExpand = (id) => {
        setClick(true);
    }

    const data = React.useMemo(
        () => [
          {
            id: '1',
            desc: 'TERMINACION',
            unidad: '',
            cnt: '',
            subtotal: '$500000',
            type: 'Section',
            subRows: [{
                id: '1.1',
                desc: 'Puertas',
                unidad: '',
                cnt: '',
                subtotal: '3000',
                type: 'Partida',
                subRows: [
                    {
                        id: '1.2',
                        desc: '007 Puerta detalle',
                        unidad: 'Unidad del endpoint',
                        cnt: '5',
                        subtotal: '2500',
                        type: 'Producto'
                    }
                ]
              }]
          },
          {
            id: '1',
            desc: 'TERMINACION',
            unidad: '',
            cnt: '',
            subtotal: '$3000',
            type: 'Section',
            subRows: [{
                id: '1.1',
                desc: 'Puertas',
                unidad: '',
                cnt: '',
                subtotal: '$3000',
                type: 'Partida',
                subRows: [
                    {
                        id: '1.2',
                        desc: '007 Puerta detalle',
                        unidad: 'Unidad del endpoint',
                        cnt: '',
                        subtotal: '2500',
                        type: 'Producto'
                    }
                ]
              }]
          },
          {
            id: '1',
            desc: 'TERMINACION',
            unidad: '',
            cnt: '',
            subtotal: '$3000',
            type: 'Section',
            subRows: [{
                id: '1.1',
                desc: 'Puertas',
                unidad: '',
                cnt: '0',
                subtotal: '$3000',
                type: 'Partida',
                subRows: [
                    {
                        id: '1.2',
                        desc: '007 Puerta detalle',
                        unidad: 'Unidad del endpoint',
                        cnt: 'input',
                        subtotal: '2500',
                        type: 'Producto'
                    }
                ]
              }]
          }
        ],
        []
    )
    
    const columns = React.useMemo(
    () => [
        {
            Header: 'Item',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Descripción',
            accessor: 'desc',
        },
        {   Header: 'Unidad',
            accessor: 'unidad'
        },
        {   Header: 'Cantidad',
            Cell: ({row}) => {return row?.original?.type === 'Producto' && <TableInput />}
        },
        { 
            Header: 'Subtotal',
            Cell: ({row}) => {
                switch (row?.original?.type) {
                    case 'Section':
                        return(
                            <>
                                {row?.original?.subtotal}
                            </>
                        );
                
                    case 'Partida':
                        return(
                            <>
                                {row?.original?.subtotal}
                            </>
                        );
                    
                    case 'Producto':
                        return(
                            <>
                                <TableInput />
                            </>
                        );
                }
            
            }
        },
        {
            id: 'expander',
            header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => {
                return (<ImgSubtotal {...getToggleAllRowsExpandedProps()} src={isAllRowsExpanded ? iconArrowUp : iconArrowDown}></ImgSubtotal>)
            },
            Cell: ({row}) => {
                switch (row?.original?.type) {
                    case 'Section':
                        return(
                            <ImgSubtotal {...row.getToggleRowExpandedProps()} src={row.isExpanded ? iconArrowUp : iconArrowDown}></ImgSubtotal>
                        );
                
                    case 'Partida':
                        return(
                            <ImgSubtotal {...row.getToggleRowExpandedProps()} src={row.isExpanded ? iconArrowUp : iconArrowDown}></ImgSubtotal>
                        );
                    case 'Producto':
                        return(
                            <ButtonConsult>Consultar</ButtonConsult>
                        );
                    
                }
            }
        }

    ],
    []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
        useExpanded
	);
    return (
        <Root>
            <ContentTable>
                <Header>
                    <Title>Itemizado y presupuesto</Title>
                    <ButtonsHeader>
                        <Button>Expandir Filas</Button>
                        <Button><ImgButton src={specDownloadSource}></ImgButton>Descargar</Button>
                    </ButtonsHeader>
                </Header>
                <Table {...getTableProps()}>
                    <THEAD>
                        {headerGroups.map(headerGroup => (
                        <TR {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <TH
                                {...column.getHeaderProps()}
                            >
                                {column.render('Header')}
                            </TH>
                            ))}
                        </TR>
                        ))}
                    </THEAD>
                    <TBODY {...getTableBodyProps()}>
                        {rows.map(row => {
                        prepareRow(row)
                        return (
                            <TR {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <TD
                                    {...cell.getCellProps()}
                                    isTypeUnity={
                                        cell?.row?.original?.type === 'Producto'
                                    }
                                >
                                    {cell.render('Cell')}
                                </TD>
                                )
                            })}
                            </TR>
                        )
                        })}
                    </TBODY>
                </Table>
                <TableFooter>
                    <TableElements>30 elementos especificados</TableElements>
                    <TableTotal>Total</TableTotal>
                    <TableTotal>$40000</TableTotal>
                </TableFooter>
            </ContentTable>
        </Root>
    )
    
};

export default SpecContentsTable;