import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onGetStats } from '../../ProfileStats.actions';
import { COLUMNS } from './constants';
import TableStats from '../../components/profileTableStats';
import { Button } from '../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';

import { COLUMNS as COLUMNS_PRODUCST } from '../products/constants';

const ProjectsStats = () => {
	const {
		projects: { filters, list, loading, total, nextPage },
		productsByProject: {
			filters: subFilters,
			list: subList,
			loading: subLoading,
			total: subTotal,
			nextPage: subNextPage,
		},
	} = useSelector((state) => state.profileStats);
	const dispatch = useDispatch();
	const columns = useMemo(
		() => [
			...COLUMNS,
			{
				id: 'expander',
				Header: () => null,
				Cell: ({ row, rows, expandedDepth }) => {
					return (
						<Button
							{...row.getToggleRowExpandedProps()}
							variant={VARIANTS_BUTTON.CANCEL}
							onClick={() => hangleToggleRow(row, rows, expandedDepth)}
						>
							{row.isExpanded ? 'Ocultar' : 'Ver productos'}
						</Button>
					);
				},
			},
		],
		[],
	);
	const subColums = useMemo(() => COLUMNS_PRODUCST, []);

	useEffect(() => {
		if (!list.length)
			dispatch(
				onGetStats({
					...filters,
					stat: 'project_stats',
					page: 0,
					limit: 10,
				}),
			);
	}, []);

	const handleChangeLimit = (limit, isSubRows = false) =>
		dispatch(
			onGetStats(
				{
					...(isSubRows ? subFilters : filters),
					page: 0,
					limit,
				},
				isSubRows,
			),
		);

	const handlePaginateStats = (direction, isSubRows = false) =>
		dispatch(
			onGetStats(
				{
					...(isSubRows ? subFilters : filters),
					page: direction === 'next' ? filters.page + 1 : filters.page - 1,
				},
				isSubRows,
			),
		);

	const hangleToggleRow = (row, rows, expandedDepth) => {
		if (expandedDepth >= 1) {
			const rowExpanded = rows.find((item) => item.isExpanded === true);
			if (row.original.id !== rowExpanded.original.id)
				rowExpanded.toggleRowExpanded();
		}
		row.toggleRowExpanded();
		if (!row.isExpanded)
			dispatch(
				onGetStats(
					{
						...filters,
						page: 0,
						limit: 10,
						stat: 'product_stats',
						project: row.original.id,
					},
					true,
				),
			);
	};

	return loading && !list.length ? (
		<h1>Cargando...</h1>
	) : (
		<TableStats
			columns={columns}
			data={list}
			total={total}
			page={filters.page}
			limit={filters.limit}
			nextPage={nextPage}
			loading={loading}
			onPaginateStats={handlePaginateStats}
			onChangeLimit={handleChangeLimit}
			subColums={subColums}
			subData={subList}
			subTotal={subTotal}
			subPage={subFilters.page}
			subLimit={subFilters.limit}
			subNextPage={subNextPage}
			subLoading={subLoading}
		/>
	);
};

export default ProjectsStats;
