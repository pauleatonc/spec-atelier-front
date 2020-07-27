import { createContext } from 'react';

const contextPayload = {
  show: false,
  onShow: () => undefined,
};
const SpecProductsPanelLayoutContext = createContext(contextPayload);

SpecProductsPanelLayoutContext.displayName = 'spec-products-panel-layout-context';

export default SpecProductsPanelLayoutContext;
