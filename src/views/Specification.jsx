import React, { useState } from 'react';
import AlertContainer from '../containers/alert/Alert.container';
import SpecHeaderContainer from '../containers/spec-header/SpecHeader.container';
import SpecDocumentContainer from '../containers/spec-document/SpecDocument.container';
import SpecNavigatorContainer from '../containers/spec-navigator/SpecNavigator.container';
import SpecProductsSectionsContainer from '../containers/spec-products-sections/SpecProductsSections.container';
import SpecProductsItemsContainer from '../containers/spec-products-items/SpecProductsItems.container';
import SpecProductsContainer from '../containers/spec-products/SpecProducts.container';
import SpecModalProduct from '../containers/spec-modal-product/SpecModalProduct.container';
import SpecCreateProductOneContainer from '../containers/spec-create-product/SpecCreateProductStepOne.container';
import SpecCreateProductTwoContainer from '../containers/spec-create-product/SpecCreateProductStepTwo.container';
import SpecCreateProductThreeContainer from '../containers/spec-create-product/SpecCreateProductStepThree.container';
import SpecEditProductContainer from '../containers/spec-edit-product/SpecEditProduct.container';
import SpecImagesModalContainer from '../containers/spec-images-modal/SpecImagesModal.container';
import SpecContentsContainer from '../containers/spec-contents/SpecContents.container';
import SpecAdminContainer from '../containers/spec-admin/SpecAdmin.container';
import SpecProductsPanelLayout from '../components/layouts/SpecProductsPanelLayout';
import ContactFormContainer from '../containers/modal-contact-form/ModalContactForm.container';

import { Root, Header, Main, Navigation, Panels } from './Specification.styles';

/**
 * The Specification's view.
 */
const Specification = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [selectedSection, setSelectedSection] = useState('');
	const [selectedItem, setSelectedItem] = useState('');
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
							<SpecProductsPanelLayout
								showFilters={showFilters}
								selectedSection={selectedSection}
								selectedItem={selectedItem}
								setShowFilters={setShowFilters}
								setSelectedSection={setSelectedSection}
								setSelectedItem={setSelectedItem}
								filtersPanels={[
									<SpecProductsSectionsContainer
										setShowFilters={setShowFilters}
										setSelectedSection={setSelectedSection}
									/>,
									<SpecProductsItemsContainer
										setShowFilters={setShowFilters}
										setSelectedItem={setSelectedItem}
									/>,
								]}
							>
								<SpecProductsContainer />
							</SpecProductsPanelLayout>
							<SpecContentsContainer />
							<SpecAdminContainer />
						</Panels>
					</Navigation>
				</Main>
			</Root>
			<SpecCreateProductOneContainer />
			<SpecCreateProductTwoContainer />
			<SpecCreateProductThreeContainer />
			<SpecEditProductContainer />
			<SpecImagesModalContainer />
			<AlertContainer />
			<SpecModalProduct />
			<ContactFormContainer type="product" />
		</>
	);
};

export default Specification;
