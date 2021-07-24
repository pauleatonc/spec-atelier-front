import React from 'react';
import { useSelector } from 'react-redux';
import AlertContainer from '../containers/alert/Alert.container';
import SpecHeaderContainer from '../containers/spec-header/SpecHeader.container';
import SpecContentButtons from '../containers/spec-contents-buttons/SpecContentsButtons.container';
import SpecDocumentContainer from '../containers/spec-document/SpecDocument.container';
import SpecContentsTable from '../containers/spec-contents-table/SpecContentsTable';
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
	const { dataSection } = useSelector((state) => state);
	const {
		option: { option },
	} = dataSection;
	return (
		<>
			<Root>
				<Header>
					<SpecHeaderContainer />
				</Header>
				<SpecContentButtons />
				<Main>
					{option === 'T' ? <SpecContentsTable /> : <SpecDocumentContainer />}

					<Navigation>
						<SpecNavigatorContainer />
						<Panels>
							<SpecProductsPanelLayout
								filtersPanels={[
									<SpecProductsSectionsContainer />,
									<SpecProductsItemsContainer />,
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
