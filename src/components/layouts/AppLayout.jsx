import React from 'react';
import PropTypes from 'prop-types';
import { Root, Main } from './AppLayout.styles';

/** The AppLayout's component */
const AppLayout = (props) => {
  const { children, footer, header } = props;

  return (
    <Root>
      {header && header}
      <Main>{children}</Main>
      {footer && footer}
    </Root>
  );
};

AppLayout.defaultProps = {
  footer: null,
  header: null,
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  header: PropTypes.node,
};

export default AppLayout;
