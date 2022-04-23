import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { useFocus } from 'helpers/custom-hooks.helper';
import { SEARCH_COLOR_ICON, SEARCH_ICON } from 'assets/Images';
import { Root, Input, SearchIcon } from './SearchBar.styles';

/** The SearchBar's component */
const SearchBar = (props) => {
  const {
    justifyContent,
    maxWidth,
    placeholder,
    value,
    onChange,
    name,
  } = props;
  const ref = useRef();
  const focused = useFocus(ref);

  return (
    <Root maxWidth={maxWidth}>
      <Input
        type="search"
        placeholder={placeholder}
        name={name}
        justifyContent={justifyContent}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <SearchIcon
        src={focused ? SEARCH_COLOR_ICON : SEARCH_ICON}
        justifyContent={justifyContent}
      />
    </Root>
  );
};

SearchBar.defaultProps = {
  justifyContent: 'flex-start',
  maxWidth: 'initial',
  placeholder: '',
  name: '',
};
SearchBar.propTypes = {
  justifyContent: PropTypes.oneOf(['flex-start', 'center']),
  maxWidth: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
