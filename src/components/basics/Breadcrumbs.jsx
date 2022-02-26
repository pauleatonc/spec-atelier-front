import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Item,
  Underline,
  ArrowLeft,
  ItemText,
} from './Breadcrumbs.styles';

/**
 * The Breadcrumbs' component.
 */
const Breadcrumbs = ({ items, customHeight, customWidth, justifyCenter }) => {
  const labelsLength = items.length;

  return (
    <Root
      customHeight={customHeight}
      customWidth={customWidth}
      justifyCenter={justifyCenter}
    >
      {items.map((item, index) => (
        <Fragment key={`breadcrumbs-item--${item.label}`}>
          <Item
            isLink={Boolean(item.onClick)}
            selected={labelsLength === index + 1}
            onClick={item.onClick}
          >
            <ItemText>
              {item.label}
              {labelsLength === index + 1 && <Underline />}
            </ItemText>
          </Item>
          {labelsLength !== index + 1 && <ArrowLeft />}
        </Fragment>
      ))}
    </Root>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ).isRequired,
};

export default Breadcrumbs;
