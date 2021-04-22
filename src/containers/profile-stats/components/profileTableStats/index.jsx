import React from 'react';
import { useTable, useExpanded } from 'react-table';
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
import { SORT_ORDER_OPTIONS } from '../../uitls';

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
	sortBy,
	sortOrder,
	subSortBy,
	subSortOrder,
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
							{headerGroup.headers.map((column) => {
								return (
									<TableTh
										{...column.getHeaderProps()}
										onClick={() => onSortTable(column)}
										canSort={column.canSort}
									>
										{column.render('Header')}
										<IconSort
											className={`fas ${
												column.id === sortBy &&
												(sortOrder === SORT_ORDER_OPTIONS.ASC
													? 'fa-arrow-up'
													: 'fa-arrow-down')
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
																{headerGroup.headers.map((subColum) => (
																	<TableTh
																		{...subColum.getHeaderProps()}
																		onClick={() => onSortTable(subColum, true)}
																		canSort={subColum.canSort}
																	>
																		{subColum.render('Header')}
																		<IconSort
																			className={`fas ${
																				subColum.id === subSortBy &&
																				(subSortOrder === SORT_ORDER_OPTIONS.ASC
																					? 'fa-arrow-up'
																					: 'fa-arrow-down')
																			}`}
																		/>
																	</TableTh>
																))}
															</RowTable>
														))}
													</TableHead>
													<TableBody {...getSubTableBodyProps()}>
														{subRows.map((subRow) => {
															prepareSubRow(subRow);
															return (
																<RowTable {...subRow.getRowProps()}>
																	<TableTd />
																	{subRow.cells.map((subCell) => (
																		<TableTd
																			{...subCell.getCellProps()}
																			isProjectType={
																				subCell.column?.id === 'project_type'
																			}
																		>
																			{subCell.column?.id ===
																				'project_type' && (
																				<IconType
																					type={subCell?.value.toUpperCase()}
																				/>
																			)}
																			{subCell.render('Cell')}
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
	total: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
	nextPage: PropTypes.number.isRequired,
	loading: PropTypes.bool.isRequired,
	subColums: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	subData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	subTotal: PropTypes.number.isRequired,
	subPage: PropTypes.number.isRequired,
	subLimit: PropTypes.number.isRequired,
	subNextPage: PropTypes.number.isRequired,
	subLoading: PropTypes.bool.isRequired,
	onPaginateStats: PropTypes.func.isRequired,
	onChangeLimit: PropTypes.func.isRequired,
	onSortTable: PropTypes.func.isRequired,
};
