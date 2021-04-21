import React from 'react';
import PropTypes from 'prop-types';

import { Paginator, ArrowPaginator, SelectPaginator } from './styles';

import { LIMIT_OPTIONS, PAGINATOR_OPTIONS } from '../../uitls';

const ProfileTablePaginator = ({
	total,
	page,
	limit,
	nextPage,
	loading,
	onPaginateStats,
	onChangeLimit,
	isSubRows,
}) => {
	const currentItemsView = limit * (page + 1);

	const handleChangeLimit = ({ target: { value } }) => {
		if (parseInt(value, 10) !== limit) onChangeLimit(value, isSubRows);
	};

	return (
		<Paginator isSubRows={isSubRows}>
			<span>Ítems por página:</span>
			<SelectPaginator
				onChange={handleChangeLimit}
				defaultValue={limit}
				disabled={loading || LIMIT_OPTIONS[0] > total}
			>
				{LIMIT_OPTIONS.map((val) => {
					return (
						<option key={val} value={val}>
							{val}
						</option>
					);
				})}
			</SelectPaginator>
			<span>{`${
				limit > total || currentItemsView > total ? total : currentItemsView
			} de ${total}`}</span>
			<ArrowPaginator
				disabled={page === 0 || loading}
				onClick={() => onPaginateStats(PAGINATOR_OPTIONS.PREV, isSubRows)}
			>
				<i className="fas fa-angle-left" />
			</ArrowPaginator>
			<ArrowPaginator
				disabled={!nextPage || loading}
				onClick={() => onPaginateStats(PAGINATOR_OPTIONS.NEXT, isSubRows)}
			>
				<i className="fas fa-angle-right" />
			</ArrowPaginator>
		</Paginator>
	);
};

export default ProfileTablePaginator;

ProfileTablePaginator.defaultProps = {
	nextPage: 0,
	isSubRows: false,
};

ProfileTablePaginator.propTypes = {
	total: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
	nextPage: PropTypes.number,
	loading: PropTypes.bool.isRequired,
	onPaginateStats: PropTypes.func.isRequired,
	onChangeLimit: PropTypes.func.isRequired,
	isSubRows: PropTypes.bool,
};
