import React from 'react';
import { Container, SearchContaienr, ButtonFilter } from './Search.styles';
import { SearchBar } from '../../components/SpecComponents';

const Search = ({ keyword, onChangeParams, placeholder, onClickFilter }) => {
	return (
		<Container>
			<SearchContaienr>
				<SearchBar
					name="keyword"
					justifyContent="center"
					maxWidth="432px"
					placeholder={placeholder}
					value={keyword}
					onChange={onChangeParams}
				/>
				<ButtonFilter rol="button" onClick={() => onClickFilter()}>
					<i className="fas fa-filter" />
				</ButtonFilter>
			</SearchContaienr>
		</Container>
	);
};

export default Search;
