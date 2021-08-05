import React, { useState, useMemo } from 'react';
import { useTable, useExpanded } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	Root,
	ContentTable,
	Header,
	Table,
	TableThead,
	TableTbody,
	TableTd,
	TableTh,
	Title,
	ButtonsHeader,
	Button,
	ImgButton,
	IconExpan,
	ButtonConsult,
	ContentFooter,
	TableElements,
	TableTotal,
	ImgExpanderAll,
	ContainerTotalTable,
} from './SpecContentsTable.styles';
import specDownloadSource from '../../assets/images/icons/ic-download.svg';
import iconArrowDown from '../../assets/images/icons/blue-arrow-down.svg';
import iconArrowUp from '../../assets/images/icons/blue-arrow-up.svg';
import CurrentInputTable from './components/CurrentInputTable';
import { handleUpdateProduct } from '../spec-document/SpecDocument.actions';
import { downloadTableDocument } from '../spec-header/SpecHeader.actions';

const SpecContentsTable = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { blocks, project } = useSelector((state) => state.specDocument);
	const [expandAll, setExpandAll] = useState();
	const [toggleExpanded, setToggleExpanded] = useState(false);

	const handleDownloadTableClick = () =>
		dispatch(downloadTableDocument({ specID: id }));

	const sectionsBlocks = blocks.filter((block) => block.type === 'Section');

	const productsReducer = blocks
		.filter((block) => block.type === 'Product')
		.map((productBlock) => ({
			...productBlock,
			subtotal:
				productBlock?.element?.price_user === null
					? productBlock?.element?.price
					: productBlock?.element?.price_user,
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
					)
					.reduce((a, b) => (a += b.subtotal), 0),
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
						subtotal:
							productBlock?.element?.price_user === null
								? `D${productBlock?.element?.price}`
								: `U${productBlock?.element?.price_user}`,
						type: productBlock.type,
					})),
			})),
	}));

	const itemReducer = blocksReducer.map((itemBlock) => ({
		id: itemBlock.id,
		row: itemBlock.subRows
			.map((datanum) => datanum.subtotal)
			.reduce((a, b) => (a += b), 0),
	}));

	const formatedDataTable = sectionsBlocks.map((sectionBlock) => ({
		item_id: `${sectionBlock.element.item_id}.`,
		id: sectionBlock.element.id,
		desc: sectionBlock.element.item_title,
		unidad: '',
		cnt: 0,
		subtotal: itemReducer
			.filter((block) => block.id === sectionBlock.element.id)
			.map((datanum) => datanum.row),
		type: sectionBlock.type,
		subRows: blocks
			.filter(
				(block) =>
					block.type === 'Item' && block.section === sectionBlock.element.id,
			)
			.map((itemBlock) => ({
				item_id: `${itemBlock.element.item_id}.`,
				id: itemBlock.element.id,
				desc: itemBlock.element.item_title,
				unidad: '',
				cnt: 0,
				subtotal: productsReducer
					.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					)
					.reduce((a, b) => (a += b.subtotal), 0),
				type: itemBlock.type,
				subRows: blocks
					.filter(
						(block) =>
							block.type === 'Product' && block.item === itemBlock.element.id,
					)
					.map((productBlock) => ({
						item_id: `${productBlock.element.item_id}.`,
						id: productBlock.element.id,
						desc: productBlock.element.item_title,
						unidad: productBlock?.element?.unit,
						cnt:
							productBlock?.element?.quantity === null
								? 0
								: productBlock?.element?.quantity,
						subtotal:
							productBlock?.element?.price_user === null
								? productBlock?.element?.price
								: productBlock?.element?.price_user,
						type: productBlock.type,
						priceUser: productBlock?.element?.price_user !== null,
					})),
			})),
	}));

	const dataProducts = blocks
		.filter((block) => block.type === 'Product')
		.map((productBlock) => ({
			...productBlock,
			subtotal:
				productBlock?.element?.price_user === null
					? productBlock?.element?.price
					: productBlock?.element?.price_user,
		}));

	const totalProducts = dataProducts.reduce((a, b) => (a += b.subtotal), 0);

	const data = useMemo(() => formatedDataTable, [blocks]);

	const handleOnBlurInput = (tableInputType, inputValue, productId) => {
		const body = {
			id: productId,
			data: {
				product: {
					[tableInputType]: parseInt(inputValue, 10),
				},
			},
		};
		dispatch(handleUpdateProduct(body));
	};

	const simulateClick = (e) => {
		setExpandAll(e);
	};

	const allExpand = () => {
		setToggleExpanded(!toggleExpanded);
		expandAll.click();
	};

	const columns = useMemo(
		() => [
			{
				Header: 'Ítem',
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
							if (row?.original?.priceUser === true) {
								return (
									<CurrentInputTable
										tableInputType="price_user"
										value={row?.original?.subtotal}
										onBlurInput={handleOnBlurInput}
										row={row.original}
									/>
								);
							}
							if (
								row?.original?.subtotal === 0 ||
								row?.original?.subtotal === null
							) {
								return (
									<CurrentInputTable
										tableInputType="price_user"
										value={0}
										onBlurInput={handleOnBlurInput}
										row={row.original}
									/>
								);
							}
							return row?.original?.subtotal;

						default:
							return <>{row?.original?.subtotal}</>;
					}
				},
			},
			{
				id: 'expander',
				Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
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
								<IconExpan
									{...row.getToggleRowExpandedProps()}
									className={`fas fa-chevron-${row.isExpanded ? 'up' : 'down'}`}
								/>
							);

						case 'Item':
							return (
								<IconExpan
									{...row.getToggleRowExpandedProps()}
									className={`fas fa-chevron-${row.isExpanded ? 'up' : 'down'}`}
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
				<Table {...getTableProps()}>
					<TableThead>
						<Header colSpan="6">
							<Title>Itemizado y presupuesto: {project.name}</Title>
							<ButtonsHeader>
								<Button onClick={allExpand}>{`${
									toggleExpanded ? 'Contraer' : 'Expandir'
								} Filas`}</Button>
								<Button
									title="Descargar presupuesto"
									onClick={handleDownloadTableClick}
								>
									<ImgButton src={specDownloadSource} />
									Descargar
								</Button>
							</ButtonsHeader>
						</Header>
					</TableThead>
					<TableThead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<TableTh
										{...column.getHeaderProps()}
										isDesc={column.id === 'desc'}
									>
										{column.render('Header')}
									</TableTh>
								))}
							</tr>
						))}
					</TableThead>
					<TableTbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<TableTd
											{...cell.getCellProps()}
											isTypeUnity={cell?.row?.original?.type === 'Product'}
											isDesc={cell.column.id === 'desc'}
										>
											{cell.render('Cell')}
										</TableTd>
									))}
								</tr>
							);
						})}
					</TableTbody>
					<tfoot>
						<tr>
							<td colSpan="6">
								<ContentFooter>
									<TableElements>
										{dataProducts.length} elementos especificados
									</TableElements>
									<ContainerTotalTable>
										<TableTotal mRight="36">Total:</TableTotal>
										<TableTotal>${totalProducts}</TableTotal>
									</ContainerTotalTable>
								</ContentFooter>
							</td>
						</tr>
					</tfoot>
				</Table>
			</ContentTable>
		</Root>
	);
};

export default SpecContentsTable;
