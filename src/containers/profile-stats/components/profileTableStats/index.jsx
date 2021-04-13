import React from 'react';
import { useTable, useExpanded } from 'react-table';

import {
	Table,
	RowTable,
	TableTh,
	TableHead,
	TableBody,
	TableTd,
	IconType,
} from './styles';
import ProfileTablePaginator from '../profileTablePaginator';

const ProfileTableStats = ({
	columns,
	data,
	total,
	page,
	limit,
	nextPage,
	loading,
	onPaginateStats,
	onChangeLimit,
	subColums,
	subData = [],
	subTotal,
	subPage,
	subLimit,
	subNextPage,
	subLoading,
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
											<TableTd
												{...cell.getCellProps()}
												isProjectType={cell.column?.id === 'project_type'}
											>
												{cell.column?.id === 'project_type' && (
													<IconType type={cell?.value.toUpperCase()} />
												)}
												{cell.render('Cell')}
											</TableTd>
										);
									})}
								</RowTable>
								{!!row.isExpanded && (
									<tr>
										{subLoading ? (
											<TableTd colSpan="9">Cargando...</TableTd>
										) : (
											<td colSpan="9">
												<Table {...getSubTableProps()}>
													<TableHead>
														{subHeaderGroups.map((headerGroup) => (
															<RowTable {...headerGroup.getHeaderGroupProps()}>
																<TableTh />
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
																	<TableTd />
																	{row.cells.map((cell) => {
																		return (
																			<TableTd
																				{...cell.getCellProps()}
																				isProjectType={
																					cell.column?.id === 'project_type'
																				}
																			>
																				{cell.column?.id === 'project_type' && (
																					<IconType
																						type={cell?.value.toUpperCase()}
																					/>
																				)}
																				{cell.render('Cell')}
																			</TableTd>
																		);
																	})}
																</RowTable>
															);
														})}
													</TableBody>
												</Table>
												<ProfileTablePaginator
													isSubRows
													total={subTotal}
													page={subPage}
													limit={subLimit}
													nextPage={subNextPage}
													loading={subLoading}
													onPaginateStats={onPaginateStats}
													onChangeLimit={onChangeLimit}
												/>
											</td>
										)}
									</tr>
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
				nextPage={nextPage}
				loading={loading}
				onPaginateStats={onPaginateStats}
				onChangeLimit={onChangeLimit}
			/>
		</>
	);
};

export default ProfileTableStats;
