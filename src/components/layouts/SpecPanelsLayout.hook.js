import { useContext, useEffect } from 'react';
import SpecPanelsLayoutContext from './SpecPanelsLayout.context';

/**
 * The spec panels layout hook.
 */
const useSpecPanelsLayout = open => {
  const { onShow } = useContext(SpecPanelsLayoutContext);

  useEffect(() => onShow(open), [open]);
};

export default useSpecPanelsLayout;
