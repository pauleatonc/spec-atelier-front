import React from 'react';
import PropTypes from 'prop-types';

/**
 * The Breadcrumbs' component.
 */
const Breadcrumbs = props => {
  const { labels } = props;
  const labelsLength = labels.length;

  return (
    <div className="breadcrumbs">
      {labels.map((label, index) => {
        const breadcrumbClass = labelsLength === index + 1
          ? 'breadcrumbs__selected-item'
          : 'breadcrumbs__item';

        return (
          <span className={breadcrumbClass} key={`breadcrumbs-item--${label}`}>
            {label}
            {labelsLength !== index + 1 && <span className="breadcrumbs__icon" />}
          </span>
        );
      }
      )}
    </div>
  );
};

Breadcrumbs.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumbs;
