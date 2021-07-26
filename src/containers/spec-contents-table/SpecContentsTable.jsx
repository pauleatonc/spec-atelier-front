import React, {useState} from 'react';
import { useTable, useExpanded } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
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
	TableTotal,
} from './SpecContentsTable.styles';
import specDownloadSource from '../../assets/images/icons/ic-download.svg';
import iconArrowDown from '../../assets/images/icons/blue-arrow-down.svg';
import iconArrowUp from '../../assets/images/icons/blue-arrow-up.svg';
import CurrentInputTable from './components/CurrentInputTable';
//import PubSub from 'pubsub-js'
import { sendData } from './SpecContentsTable.actions';

const SpecContentsTable = () => {
	const dispatch = useDispatch();
    const {bodyData} = useSelector(state => state);	
	const { blocks, project } = useSelector((state) => state.specDocument);
	const sectionsBlocks = blocks.filter(block => block.type === 'Section');
	const datapb =  blocks.filter(block => block.type === 'Product')
	.map(productBlock => ({
		...productBlock,
		subtotal:4
	}));
	const dataArray = sectionsBlocks.map(sectionBlock => ({
		id: sectionBlock.element.id,
		desc: sectionBlock.element.name,
		unidad: '',
		cnt: 0,
		subtotal: 0,
		type: sectionBlock.type,
		//...sectionBlock,
		subRows: blocks
			.filter(block => block.type === 'Item' && block.section === sectionBlock.element.id)
			.map(itemBlock => ({
			//...itemBlock,
			id: itemBlock.element.id,
			desc: itemBlock.element.name,
			unidad: '',
			cnt: 0,
			subtotal: datapb.filter(block => block.type === 'Product' && block.item === itemBlock.element.id)
			.reduce((a, b) => a = a + b.subtotal, 0),
			type: itemBlock.type,
			subRows: blocks.filter(block => block.type === 'Product' && block.item === itemBlock.element.id)
			.map(productBlock => ({
				id: productBlock.element.id,
				desc: productBlock.element.name,
				unidad: '',
				cnt: 0,
				subtotal: 4, // viene del endpoint
				type: productBlock.type,
			})),
			})),
	}));
	const datapb2 = dataArray.filter(block => block.type === 'Section').map(itemBlock => ({
		row: itemBlock.subRows, 
		type: 'Item',
		id: itemBlock.id
	}));
	const dataArrayFinal = sectionsBlocks.map(sectionBlock => ({
		id: sectionBlock.element.id,
		desc: sectionBlock.element.name,
		unidad: '',
		cnt: 0,
		subtotal: datapb2.filter(block => block.type === 'Item' && block.id === sectionBlock.element.id)
		.map(datanum => datanum.row).reduce((a, b) => a = a + b[0].subtotal, 0),
		type: sectionBlock.type,
		subRows: blocks
			.filter(block => block.type === 'Item' && block.section === sectionBlock.element.id)
			.map(itemBlock => ({
			id: itemBlock.element.id,
			desc: itemBlock.element.name,
			unidad: '',
			cnt: 0,
			subtotal: datapb.filter(block => block.type === 'Product' && block.item === itemBlock.element.id)
			.reduce((a, b) => a = a + b.subtotal, 0),
			type: itemBlock.type,
			subRows: blocks.filter(block => block.type === 'Product' && block.item === itemBlock.element.id)
			.map(productBlock => ({
				id: productBlock.element.id,
				desc: productBlock.element.name,
				unidad: '',
				cnt: 0,
				subtotal: 4, // viene del endpoint
				type: productBlock.type,
			})),
			})),
	}));
	const dataProducts = datapb.filter(block => block.type === 'Product');
	const totalProducts = dataProducts.reduce((a, b) => a = a + b.subtotal, 0);
	const data = React.useMemo(
		() => dataArrayFinal,
		[],
	);

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
			{ Header: 'Unidad', accessor: 'unidad' },
			{
				Header: 'Cantidad',
				Cell: ({ row }) => {
					return (
						row?.original?.type === 'Product' && (
							<CurrentInputTable
								tableInputType="quantity"
								value={row?.original?.cnt}
								enlacer={row?.original?.id}
								// onChange={e => setQuantity(e.target.value)}
							/>
						)
					);
				},
			},
			{
				Header: 'Subtotal',
				Cell: ({ row }) => {
					switch (row?.original?.type) {
						case 'Product':
							return (
								row?.original?.subtotal === 0 ? (
									<CurrentInputTable
										tableInputType="subtotal"
										value={row?.original?.subtotal} 
										enlacer={row?.original?.id} />
								): row?.original?.subtotal 
							);
						default:
							return <>{row?.original?.subtotal}</>;
					}
				},
			},
			{
				id: 'expander',
				header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => {
					return (
						<ImgSubtotal
							{...getToggleAllRowsExpandedProps()}
							src={isAllRowsExpanded ? iconArrowUp : iconArrowDown}
						/>
					);
				},
				Cell: ({ row }) => {
					switch (row?.original?.type) {
						case 'Section':
							return (
								<ImgSubtotal
									{...row.getToggleRowExpandedProps()}
									src={row.isExpanded ? iconArrowUp : iconArrowDown}
								/>
							);

						case 'Item':
							return (
								<ImgSubtotal
									{...row.getToggleRowExpandedProps()}
									src={row.isExpanded ? iconArrowUp : iconArrowDown}
								/>
							);
						default:
							return <ButtonConsult>Consultar precio</ButtonConsult>;
					}
				},
			},
		],
		[],
	);
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
		useExpanded,
	);
	return (
		<Root>
			<ContentTable>
				<Header>
					<Title>Itemizado y presupuesto del {project.name}</Title>
					<ButtonsHeader>
						<Button>Expandir Filas</Button>
						<Button>
							<ImgButton src={specDownloadSource} />
							Descargar
						</Button>
					</ButtonsHeader>
				</Header>
				<Table {...getTableProps()}>
					<THEAD>
						{headerGroups.map((headerGroup) => (
							<TR {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<TH {...column.getHeaderProps()}>
										{column.render('Header')}
									</TH>
								))}
							</TR>
						))}
					</THEAD>
					<TBODY {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<TR {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<TD
												{...cell.getCellProps()}
												isTypeUnity={cell?.row?.original?.type === 'Product'}
											>
												{cell.render('Cell')}
											</TD>
										);
									})}
								</TR>
							);
						})}
					</TBODY>
				</Table>
				<TableFooter>
					<TableElements>{dataProducts.length} elementos especificados</TableElements>
					<TableTotal>Total</TableTotal>
					<TableTotal>${totalProducts}</TableTotal>
				</TableFooter>
			</ContentTable>
		</Root>
	);
};

export default SpecContentsTable;
