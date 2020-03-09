import React from 'react';
import PropTypes from 'prop-types';

/**
 * The Tag's component. 
 */
const Tag = props => {
  const { children, selected, onClick } = props;
  let tagClass = 'tag';

  if (selected) {
    tagClass = `${tagClass} selected`;
  }

  return (
    <button className={tagClass} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Tag.defaultProps = {
  selected: false,
  onClick: () => undefined,
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tag;
