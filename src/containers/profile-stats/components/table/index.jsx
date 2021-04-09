import React from 'react';
import { useTable } from 'react-table';

import {
	Table,
	RowTable,
	TableTh,
	TableHead,
	TableBody,
	TableTd,
} from './styles';

const ProductsStatsContainer = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});

	return (
		<Table {...getTableProps()}>
			<TableHead>
				{headerGroups.map((headerGroup) => (
					<RowTable {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<TableTh {...column.getHeaderProps()}>
								{column.render('Header')}
							</TableTh>
						))}
					</RowTable>
				))}
			</TableHead>
			<TableBody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<RowTable {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<TableTd {...cell.getCellProps()}>
										{cell.render('Cell')}
									</TableTd>
								);
							})}
						</RowTable>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default ProductsStatsContainer;
