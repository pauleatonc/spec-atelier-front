import React from 'react';
import { PropTypes } from 'prop-types';
import { Root, Input, Placeholder, SearchIcon } from './SearchBar.styles';
import searchIconSource from '../../assets/images/icons/spec-search.svg';

/**
 * The SearchBar's component.
 */
const SearchBar = props => {
  const { justifyContent, maxWidth, placeholder, value, onChange } = props;
  const showPlaceholder = value === '';

  return (
    <Root maxWidth={maxWidth}>
      <Input justifyContent={justifyContent} type="search" value={value} onChange={onChange} />
      {justifyContent !== 'center' && <SearchIcon src={searchIconSource} />}
      {showPlaceholder && (
        <Placeholder justifyContent={justifyContent}>
          {justifyContent === 'center' && <SearchIcon justifyContent={justifyContent} src={searchIconSource} />}
          {placeholder}
        </Placeholder>
      )}
    </Root>
  );
};

SearchBar.defaultProps = {
  justifyContent: 'flex-start',
  maxWidth: 'initial',
  placeholder: '',
};
SearchBar.propTypes = {
  justifyContent: PropTypes.oneOf(['flex-start', 'center']),
  maxWidth: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
