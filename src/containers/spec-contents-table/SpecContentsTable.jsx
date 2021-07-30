import React,{useState} from 'react';
import { useTable, useExpanded } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
	ImgExpanderAll
} from './SpecContentsTable.styles';
import specDownloadSource from '../../assets/images/icons/ic-download.svg';
import iconArrowDown from '../../assets/images/icons/blue-arrow-down.svg';
import iconArrowUp from '../../assets/images/icons/blue-arrow-up.svg';
import CurrentInputTable from './components/CurrentInputTable';
import { handleUpdateProduct } from '../spec-document/SpecDocument.actions';
import { cleanDownload, downloadSpecDocument, downloadBudgetDocument } from '../spec-header/SpecHeader.actions';
import getStoredState from 'redux-persist/es/getStoredState';

const SpecContentsTable = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const handleDownloadBudgetClick = () => dispatch(downloadBudgetDocument({ specID: id }));
	const { blocks, project } = useSelector((state) => state.specDocument);
	const sectionsBlocks = blocks.filter((block) => block.type === 'Section');
	const productsReducer = blocks
		.filter((block) => block.type === 'Product')
		.map((productBlock) => ({
			...productBlock,
			subtotal: productBlock?.element?.price_user === null?productBlock?.element?.price:productBlock?.element?.price_user,
		}));
	
	const blocksReducer = sectionsBlocks.map((sectionBlock) => ({
		id: sectionBlock.element.id,
		desc: sectionBlock.element.name,
		unidad: '',
		cnt: 0,
		subtotal: 0,
		type: sectionBlock.type,
		subRows: blocks
			.filter(
				(block) =>
					block.type === 'Item' && block.section === sectionBlock.element.id,
			)
			.map((itemBlock) => ({
				id: itemBlock.element.id,
				desc: itemBlock.element.name,
				unidad: '',
				cnt: 0,
				subtotal: productsReducer
					.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					).reduce((a, b) => (a = a + b.subtotal), 0),
				type: itemBlock.type,
				subRows: blocks
					.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					)
					.map((productBlock) => ({
						id: productBlock.element.id,
						desc: productBlock.element.name,
						unidad: '',
						cnt: 0,
						subtotal: productBlock?.element?.price_user === null?'D'+productBlock?.element?.price:'U'+productBlock?.element?.price_user,
						type: productBlock.type,
					})),
			})),
	}));
	
	const itemReducer = blocksReducer.map((itemBlock) => ({
		id: itemBlock.id,
		row: itemBlock.subRows.map((datanum) => datanum.subtotal).reduce((a, b) => (a = a + b), 0)
	}));
	const dataArrayFinal = sectionsBlocks.map((sectionBlock) => ({
		item_id: sectionBlock.element.item_id,
		id: sectionBlock.element.id,
		desc: sectionBlock.element.item_title,
		unidad: '',
		cnt: 0,
		subtotal: itemReducer.filter((block) =>block.id === sectionBlock.element.id)
			.map((datanum) => datanum.row),
			//.reduce((a, b) => (a = a + b), 0),
		type: sectionBlock.type,
		subRows: blocks
			.filter(
				(block) =>
					block.type === 'Item' && block.section === sectionBlock.element.id,
			)
			.map((itemBlock) => ({
				item_id: itemBlock.element.item_id,
				id: itemBlock.element.id,
				desc: itemBlock.element.item_title,
				unidad: '',
				cnt: 0,
				subtotal: productsReducer
						.filter(
							(block) =>
								block.type === 'Product' && block.item === itemBlock.element.id,
						).reduce((a, b) => (a = a + b.subtotal), 0),
				type: itemBlock.type,
				subRows: blocks
					.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					)
					.map((productBlock) => ({
						item_id: productBlock.element.item_id, 
						id: productBlock.element.id,
						desc: productBlock.element.item_title,
						unidad: '',
						cnt: 0,
						subtotal: productBlock?.element?.price_user === null?productBlock?.element?.price:productBlock?.element?.price_user,
						type: productBlock.type,
						priceUser: productBlock?.element?.price_user === null?false:true
					})),
			})),
	}));
	console.log(dataArrayFinal);
	const dataProducts = blocks.filter((block) => block.type === 'Product').map((productBlock) => ({
		...productBlock,
		subtotal: productBlock?.element?.price_user === null?productBlock?.element?.price:productBlock?.element?.price_user,
	}));
	const totalProducts = dataProducts.reduce((a, b) => (a = a + b.subtotal), 0);
	const data = React.useMemo(() => dataArrayFinal, []);
	const [valueInput, setValueInput] = useState(0);
	const validate = (inputValue) => {
		setValueInput(inputValue);
		console.log(valueInput);
	}
	const handleOnBlurInput = (tableInputType, inputValue, productId) => {
		if (parseInt(valueInput) === parseInt(inputValue)){
			console.log("no today");
		}else{
			validate(parseInt(inputValue));
			setValueInput(parseInt(inputValue));
			const body = {
				id: productId,
				data:{
					product:{
						[tableInputType]: parseInt(inputValue),
					}
				}
			};
			//dispatch(handleUpdateProduct(body));
		}
	};
	const [expandAll, setExpandAll] = useState();
	const simulateClick = (e) => {
		setExpandAll(e);
	}

	const allExpand = () => {
		expandAll.click();
	}

	const columns = React.useMemo(
		() => [
			{
				Header: 'Item',
				accessor: 'item_id',
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
								onBlurInput={handleOnBlurInput}
								row={row.original}
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
							if(row?.original?.priceUser === true){
								return(
									<CurrentInputTable
									tableInputType="price_user"
									value={row?.original?.subtotal}
									onBlurInput={handleOnBlurInput}
									row={row.original}
								/>
								)
							}else{
								if(row?.original?.subtotal === 0 || row?.original?.subtotal === null){
									return(
										<CurrentInputTable
										tableInputType="price_user"
										value={0}
										onBlurInput={handleOnBlurInput}
										row={row.original}
									/>
									)
								}else{
									return (row?.original?.subtotal)
								}
							}
						default:
							return <>{row?.original?.subtotal}</>;
					}
				},
			},
			{
				id: 'expander',
				Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) =>( 
					<ImgExpanderAll
						{...getToggleAllRowsExpandedProps()}
						src={isAllRowsExpanded ? iconArrowUp : iconArrowDown}
						ref={simulateClick}
					/>
				),
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
						<Button onClick={allExpand}>Expandir Filas</Button>
						<Button title="Descargar presupuesto" onClick={handleDownloadBudgetClick}>
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
					<TableElements>
						{dataProducts.length} elementos especificados
					</TableElements>
					<TableTotal>Total</TableTotal>
					<TableTotal>${totalProducts}</TableTotal>
				</TableFooter>
			</ContentTable>
		</Root>
	);
};

export default SpecContentsTable;
