import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import SpecModalTeam from '../containers/spec-modal-team';
import SpecModalTeamNewMember from '../containers/spec-modal-team/newMember';
import { changeOption } from '../containers/spec-contents-buttons/SpecContentsButtons.actions';
import {
	ESPEC_DOCUMENT,
	SPEC_TABLE,
} from '../config/constants/button-variants';

import { Root, Main, Navigation, Panels } from './Specification.styles';

/**
 * The Specification's view.
 */
const Specification = () => {
	const dispatch = useDispatch();
	const [showFilters, setShowFilters] = useState(false);
	const [selectedSection, setSelectedSection] = useState('');
	const [selectedItem, setSelectedItem] = useState('');
	const { dataSection } = useSelector((state) => state);
	const { option } = dataSection;

	useEffect(() => {
		dispatch(changeOption(ESPEC_DOCUMENT));
	}, []);

	return (
		<>
			<Root>
				<SpecHeaderContainer />
				<SpecContentButtons />
				<Main>
					{option === SPEC_TABLE ? (
						<SpecContentsTable />
					) : (
						<SpecDocumentContainer />
					)}

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
										selectedSection={selectedSection}
									/>,
									<SpecProductsItemsContainer
										setShowFilters={setShowFilters}
										setSelectedItem={setSelectedItem}
										selectedSection={selectedSection}
										selectedItem={selectedItem}
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
			<SpecModalTeam />
			<SpecModalTeamNewMember />
			<ContactFormContainer type="product" />
		</>
	);
};

export default Specification;
