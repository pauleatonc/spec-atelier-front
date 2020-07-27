import { useContext, useEffect } from 'react';
import SpecProductsPanelLayoutContext from './SpecProductsPanelLayout.context';

/**
 * The spec products panel layout hook.
 */
const useSpecProductsPanelLayout = open => {
  const { onShow } = useContext(SpecProductsPanelLayoutContext);

  useEffect(() => onShow(open), [open]);
};

export default useSpecProductsPanelLayout;
