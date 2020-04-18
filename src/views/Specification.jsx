import React from 'react';
import AlertContainer from '../containers/alert/Alert.container';
import SpecHeaderContainer from '../containers/spec-header/SpecHeader.container';
import SpecDocumentContainer from '../containers/spec-document/SpecDocument.container';
import SpecNavigatorContainer from '../containers/spec-navigator/SpecNavigator.container';
import SpecItemsListContainer from '../containers/spec-items-list/SpecItemsList.container';
import SpecSectionsListContainer from '../containers/spec-sections-list/SpecSectionsList.container';
import SpecSelectedProductsContainer from '../containers/spec-selected-products/SpecSelectedProducts.container';
import SpecProductsListContainer from '../containers/spec-products-list/SpecProductsList.container';
import SpecPanelsLayout from '../components/layouts/SpecPanelsLayout';
import { Root, Header, Main, Navigation, Panels } from './Specification.styles';

/**
 * The Specification's view.
 */
const Specification = () => {
  return (
    <>
      <Root>
        <Header>
          <SpecHeaderContainer />
        </Header>
        <Main>
          <SpecDocumentContainer />
          <Navigation>
            <SpecNavigatorContainer />
            <Panels>
              <SpecPanelsLayout>
                <SpecSectionsListContainer />
                <SpecItemsListContainer />
                <SpecSelectedProductsContainer />
              </SpecPanelsLayout>
              <SpecProductsListContainer />
            </Panels>
          </Navigation>
        </Main>
      </Root>
      <AlertContainer />
    </>
  );
};

export default Specification;
