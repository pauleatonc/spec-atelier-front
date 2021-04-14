import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onGetStats } from '../../ProfileStats.actions';
import TableStats from '../../components/profileTableStats';
import { Button } from '../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../config/constants/button-variants';
import { PAGINATOR_OPTIONS, STATS, EXPANDED, COLUMNS } from '../../uitls';

const ProductsStats = () => {
	const {
		products: { filters, list, loading, total, nextPage },
		projectsByProduct: {
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
			...COLUMNS.PRODUCTS,
			{
				id: 'expander',
				Header: () => null,
				Cell: ({ row, rows, expandedDepth }) => {
					return !!row?.original?.projects_count ? (
						<Button
							{...row.getToggleRowExpandedProps()}
							variant={VARIANTS_BUTTON.CANCEL}
							onClick={() => hangleToggleRow(row, rows, expandedDepth)}
						>
							{row.isExpanded ? EXPANDED.HIDE : EXPANDED.VIEW_PROJECTS}
						</Button>
					) : null;
				},
			},
		],
		[],
	);
	const subColums = useMemo(() => COLUMNS.PROJECTS, []);

	useEffect(() => {
		if (!list.length)
			dispatch(
				onGetStats({
					...filters,
					stat: STATS.PRODUCTS,
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
					page:
						direction === PAGINATOR_OPTIONS.NEXT
							? filters.page + 1
							: filters.page - 1,
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
						stat: STATS.PROJECTS,
						product: row.original.id,
					},
					true,
				),
			);
	};

	const handleSortTable = (column, isSubRows = false, e) => {
		e.persist();
		/* dispatch(
			onGetStats(
				{
					...(isSubRows ? subFilters : filters),
					page: 0,
					limit: 10,
					sort_by: sortBy,
					sort_order: sortOrder,
				},
				isSubRows,
			),
		); */
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
			onSortTable={handleSortTable}
		/>
	);
};

export default ProductsStats;
