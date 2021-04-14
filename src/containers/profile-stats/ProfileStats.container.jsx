import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { onGetStats } from './ProfileStats.actions';
import TableStats from './components/profileTableStats';
import { Button } from '../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { PAGINATOR_OPTIONS, STATS, EXPANDED, COLUMNS, PRODUCTS } from './uitls';

const ProfileStatsContainer = ({ stat }) => {
	const dispatch = useDispatch();
	const isProductsStats = stat === PRODUCTS;
	const subCurrentStats = isProductsStats
		? 'projectsByProduct'
		: 'productsByProject';
	const {
		[stat]: { filters, list, loading, total, nextPage },
		[subCurrentStats]: {
			filters: subFilters,
			list: subList,
			loading: subLoading,
			total: subTotal,
			nextPage: subNextPage,
		},
	} = useSelector((state) => state.profileStats);

	const onGetStatsByFilter = (values, isSubRows = false) =>
		dispatch(
			onGetStats(
				{
					...(isSubRows ? subFilters : filters),
					...values,
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
			onGetStatsByFilter(
				{
					page: 0,
					limit: 10,
					stat: isProductsStats ? STATS.PROJECTS : STATS.PRODUCTS,
					[isProductsStats ? 'product' : 'project']: row.original.id,
				},
				true,
			);
	};

	const columns = useMemo(
		() => [
			...(isProductsStats ? COLUMNS.PRODUCTS : COLUMNS.PROJECTS),
			{
				id: 'expander',
				Header: () => null,
				Cell: ({ row, rows, expandedDepth }) => {
					return isProductsStats ? (
						!!row?.original?.projects_count && (
							<Button
								{...row.getToggleRowExpandedProps()}
								variant={VARIANTS_BUTTON.CANCEL}
								onClick={() => hangleToggleRow(row, rows, expandedDepth)}
							>
								{row.isExpanded ? EXPANDED.HIDE : EXPANDED.VIEW_PROJECTS}
							</Button>
						)
					) : (
						<Button
							{...row.getToggleRowExpandedProps()}
							variant={VARIANTS_BUTTON.CANCEL}
							onClick={() => hangleToggleRow(row, rows, expandedDepth)}
						>
							{row.isExpanded ? EXPANDED.HIDE : EXPANDED.VIEW_PRODUCTS}
						</Button>
					);
				},
			},
		],
		[stat],
	);
	const subColums = useMemo(
		() => [...(isProductsStats ? COLUMNS.PROJECTS : COLUMNS.PRODUCTS)],
		[stat],
	);

	useEffect(() => {
		if (!list.length)
			onGetStatsByFilter({
				stat: isProductsStats ? STATS.PRODUCTS : STATS.PROJECTS,
				page: 0,
				limit: 10,
			});
	}, [stat]);

	const handleChangeLimit = (limit, isSubRows = false) =>
		onGetStatsByFilter({ page: 0, limit }, isSubRows);

	const handlePaginateStats = (direction, isSubRows = false) =>
		onGetStatsByFilter(
			{
				page:
					direction === PAGINATOR_OPTIONS.NEXT
						? filters.page + 1
						: filters.page - 1,
			},
			isSubRows,
		);

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
			subColums={subColums}
			subData={subList}
			subTotal={subTotal}
			subPage={subFilters.page}
			subLimit={subFilters.limit}
			subNextPage={subNextPage}
			subLoading={subLoading}
			onPaginateStats={handlePaginateStats}
			onChangeLimit={handleChangeLimit}
			onSortTable={handleSortTable}
		/>
	);
};

export default ProfileStatsContainer;

ProfileStatsContainer.propTypes = {
	stat: PropTypes.string.isRequired,
};
