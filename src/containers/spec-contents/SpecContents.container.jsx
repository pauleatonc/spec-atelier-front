import React from 'react';
import { useSelector } from 'react-redux';
import { Root } from './SpecContents.styles';

/**
 * The SpecContents' container.
 */
const SpecContents = () => {
  const { show } = useSelector(state => state.specContents);

  return (
    <Root show={show}>
      SPEC CONTENTS
    </Root>
  )
};

export default SpecContents;
