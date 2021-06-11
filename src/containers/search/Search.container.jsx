import React from 'react';
import { Container, SearchContaienr } from './Search.styles';
import { SearchBar } from '../../components/SpecComponents';

const Search = ({ keyword, onChangeParams, placeholder }) => {
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
			</SearchContaienr>
		</Container>
	);
};

export default Search;
