import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	onHideSpecProducts,
	onShowSpecProducts,
} from '../spec-products/SpecProducts.actions';
import { Root, Section, NavIcon } from './SpecNavigator.styles';
import docSource from '../../assets/images/icons/spec-doc.svg';
import docActiveSource from '../../assets/images/icons/spec-doc_active.svg';
import itemsSource from '../../assets/images/icons/spec-items.svg';
import itemsActiveSource from '../../assets/images/icons/spec-items_active.svg';
import settingLines from '../../assets/images/icons/setting-lines.svg';
import settingLinesActive from '../../assets/images/icons/setting-lines_active.svg';
import {
	onHideSpecContents,
	onShowSpecContents,
} from '../spec-contents/SpecContents.actions';
import {
	onHideSpecAdmin,
	onShowSpecAdminn,
} from '../spec-admin/SpecAdmin.actions';

/**
 * The SpecNavigator's container.
 */
const SpecNavigator = () => {
	const { show: showProducts } = useSelector((state) => state.specProducts);
	const { show: showContents } = useSelector((state) => state.specContents);
	const { show: showAdmin } = useSelector((state) => state.specAdmin);
	const dispatch = useDispatch();
	const handleProductsClick = () => {
		if (showProducts) {
			return dispatch(onHideSpecProducts());
		}

		return (() => {
			dispatch(onShowSpecProducts());
			dispatch(onHideSpecContents());
			dispatch(onHideSpecAdmin());
		})();
	};
	const handleContentsClick = () => {
		if (showContents) {
			return dispatch(onHideSpecContents());
		}

		return (() => {
			dispatch(onShowSpecContents());
			dispatch(onHideSpecProducts());
			dispatch(onHideSpecAdmin());
		})();
	};
	const handleAdminClick = () => {
		if (showAdmin) {
			return dispatch(onHideSpecAdmin());
		}

		return (() => {
			dispatch(onShowSpecAdminn());
			dispatch(onHideSpecProducts());
			dispatch(onHideSpecContents());
		})();
	};

	return (
		<Root>
			<Section>
				<NavIcon
					src={showProducts ? docActiveSource : docSource}
					srcActive={docActiveSource}
					onClick={handleProductsClick}
				/>
			</Section>
			<Section>
				<NavIcon
					src={showContents ? itemsActiveSource : itemsSource}
					srcActive={itemsActiveSource}
					onClick={handleContentsClick}
				/>
			</Section>
			<Section>
				<NavIcon
					src={showAdmin ? settingLinesActive : settingLines}
					srcActive={settingLinesActive}
					onClick={handleAdminClick}
				/>
			</Section>
		</Root>
	);
};

export default SpecNavigator;
