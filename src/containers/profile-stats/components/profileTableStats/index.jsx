import React from 'react';
import { useTable, useExpanded, useSortBy } from 'react-table';
import PropTypes from 'prop-types';

import {
	Table,
	RowTable,
	TableTh,
	TableHead,
	TableBody,
	TableTd,
	IconType,
	IconSort,
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
	subColums,
	subData,
	subTotal,
	subPage,
	subLimit,
	subNextPage,
	subLoading,
	onPaginateStats,
	onChangeLimit,
	onSortTable,
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
			manualSortBy: true,
		},
		useSortBy,
		useExpanded,
	);

	const {
		getTableProps: getSubTableProps,
		getTableBodyProps: getSubTableBodyProps,
		headerGroups: subHeaderGroups,
		rows: subRows,
		prepareRow: prepareSubRow,
	} = useTable(
		{
			columns: subColums,
			data: subData,
			manualSortBy: true,
		},
		useSortBy,
	);

	return (
		<>
			<Table {...getTableProps()}>
				<TableHead>
					{headerGroups.map((headerGroup) => (
						<RowTable {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<TableTh
										{...column.getHeaderProps(column.getSortByToggleProps())}
										onClick={(e) => onSortTable(column, false, e)}
									>
										{column.render('Header')}
										<IconSort
											className={`fas ${
												column.isSorted &&
												(column.isSortedDesc ? 'fa-arrow-down' : 'fa-arrow-up')
											}`}
										/>
									</TableTh>
								);
							})}
						</RowTable>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<>
								<RowTable {...row.getRowProps()} isExpanded={row.isExpanded}>
									{row.cells.map((cell) => (
										<TableTd
											{...cell.getCellProps()}
											isProjectType={cell.column?.id === 'project_type'}
										>
											{cell.column?.id === 'project_type' && (
												<IconType type={cell?.value.toUpperCase()} />
											)}
											{cell.render('Cell')}
										</TableTd>
									))}
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
																	{row.cells.map((cell) => (
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
																	))}
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

ProfileTableStats.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	total: PropTypes.number,
	page: PropTypes.number,
	limit: PropTypes.number,
	nextPage: PropTypes.number,
	loading: PropTypes.bool,
	subColums: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	subData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	subTotal: PropTypes.number,
	subPage: PropTypes.number,
	subLimit: PropTypes.number,
	subNextPage: PropTypes.number,
	subLoading: PropTypes.bool,
	onPaginateStats: PropTypes.func,
	onChangeLimit: PropTypes.func,
	onSortTable: PropTypes.func,
};
