import React, { useState } from 'react';
import { useTable, useExpanded } from 'react-table';

import {
	Table,
	RowTable,
	TableTh,
	TableHead,
	TableBody,
	TableTd,
} from './styles';
import ProfileTablePaginator from '../profileTablePaginator';

const ProfileTableStats = ({
	columns,
	data,
	total,
	page,
	limit,
	next_page,
	loading,
	onPaginateStats,
	onChangeLimit,
	subColums,
	subData = [],
}) => {
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

	const {
		getTableProps: getSubTableProps,
		getTableBodyProps: getSubTableBodyProps,
		headerGroups: subHeaderGroups,
		rows: subRows,
		prepareRow: prepareSubRow,
	} = useTable({
		columns: subColums,
		data: subData,
	});

	return (
		<>
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
							<>
								<RowTable {...row.getRowProps()} isExpanded={row.isExpanded}>
									{row.cells.map((cell) => {
										return (
											<TableTd {...cell.getCellProps()}>
												{cell.render('Cell')}
											</TableTd>
										);
									})}
								</RowTable>
								{!!row.isExpanded && (
									<td colSpan="9">
										<Table {...getSubTableProps()}>
											<TableHead>
												{subHeaderGroups.map((headerGroup) => (
													<RowTable {...headerGroup.getHeaderGroupProps()}>
														{headerGroup.headers.map((column) => (
															<TableTh {...column.getHeaderProps()}>
																{column.render('Header')}
															</TableTh>
														))}
													</RowTable>
												))}
											</TableHead>
											<TableBody {...getSubTableBodyProps()}>
												{subRows.map((row) => {
													prepareSubRow(row);
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
									</td>
								)}
							</>
						);
					})}
				</TableBody>
			</Table>
			<ProfileTablePaginator
				total={total}
				page={page}
				limit={limit}
				next_page={next_page}
				loading={loading}
				onPaginateStats={onPaginateStats}
				onChangeLimit={onChangeLimit}
			/>
		</>
	);
};

export default ProfileTableStats;
