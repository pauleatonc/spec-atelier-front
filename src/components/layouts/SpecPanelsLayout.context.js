import { createContext } from 'react';

const contextPayload = {
  show: false,
  onShow: () => undefined,
};
const SpecPanelsLayoutContext = createContext(contextPayload);

SpecPanelsLayoutContext.displayName = 'spec-panels-layout-context';

export default SpecPanelsLayoutContext;
