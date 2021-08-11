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
import { downloadBudgetDocument } from '../spec-header/SpecHeader.actions';

const SpecContentsTable = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { project, quoteTable } = useSelector((state) => state.specDocument);
	const [expandAll, setExpandAll] = useState();
	const [toggleExpanded, setToggleExpanded] = useState(false);

	const simulateClick = (e) => {
		setExpandAll(e);
	};

	const allExpand = () => {
		setToggleExpanded(!toggleExpanded);
		expandAll.click();
	};

	const handleDownloadTableClick = () =>
		dispatch(downloadBudgetDocument({ specID: id }));

	const totalProducts = quoteTable.reduce((a, b) => (a += b.subtotal), 0);

	const handleOnBlurInput = (tableInputType, inputValue, row) => {
		const body = {
			id: row.original.id,
			data: {
				product: {
					[tableInputType]: parseInt(inputValue, 10),
				},
			},
		};
		dispatch(handleUpdateProduct(body, tableInputType, row.original.item));
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
			{ Header: 'unit', accessor: 'unit' },
			{
				Header: 'Cantidad',
				Cell: ({ row }) =>
					row?.original?.type === 'Product' && (
						<CurrentInputTable
							tableInputType="quantity"
							value={row?.original?.cnt}
							onBlurInput={handleOnBlurInput}
							row={row}
						/>
					),
			},
			{
				Header: 'price',
				Cell: ({ row }) => {
					if (row?.original?.type === 'Product') {
						if (row?.original?.price) {
							return `$${row?.original?.price}`;
						}
						return (
							<CurrentInputTable
								tableInputType="price_user"
								value={row?.original?.price_user}
								onBlurInput={handleOnBlurInput}
								row={row}
							/>
						);
					}
					return '';
				},
			},
			{
				Header: 'Subtotal',
				Cell: ({ row }) => `$${row?.original?.subtotal}`,
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
			data: quoteTable,
			autoResetExpanded: false,
		},
		useExpanded,
	);

	return (
		<Root>
			<ContentTable>
				<Table {...getTableProps()}>
					<TableThead>
						<Header colSpan="7">
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
							<td colSpan="7">
								<ContentFooter>
									<TableElements>
										{quoteTable.length} elementos especificados
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
