import React from 'react';
import PropTypes from 'prop-types';

/**
 * The SearchBar's component.
 */
const SearchBar = props => {
  const { placeholder, value, onChange } = props;
  const showPlaceholder = value === '';

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="search"
        value={value}
        onChange={onChange}
      />
      {showPlaceholder && (
        <section className="search-bar__placeholder">
          <i className="fas fa-search" />
          &nbsp;
          {placeholder}
        </section>
      )}
    </div>
  );
};

SearchBar.defaultProps = {
  placeholder: '',
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
