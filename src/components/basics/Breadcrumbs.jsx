import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Root, Item, Underline, ArrowLeft } from './Breadcrumbs.styles';

/**
 * The Breadcrumbs' component.
 */
const Breadcrumbs = props => {
  const { items } = props;
  const labelsLength = items.length;

  return (
    <Root>
      {items.map((item, index) => (
        <Fragment key={`breadcrumbs-item--${item.label}`}>
          <Item isLink={Boolean(item.onClick)} selected={labelsLength === index + 1} onClick={item.onClick}>
            {item.label}
            {labelsLength === index + 1 && <Underline />}
          </Item>
          {labelsLength !== index + 1 && <ArrowLeft />}
        </Fragment>
      ))}
    </Root>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  })).isRequired,
};

export default Breadcrumbs;
