import React, { Children, cloneElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Context from './SpecProductsPanelLayout.context';
import {
	Root,
	Filters,
	Panels,
	Title,
	Header,
	ButtonClose,
	Overlay,
} from './SpecProductsPanelLayout.styles';
import { onHideSpecProducts } from '../../containers/spec-products/SpecProducts.actions';

/**
 * The SpecProductsPanelLayout's component.
 */
const SpecProductsPanelLayout = (props) => {
	const { children, filtersPanels } = props;
	const [show, setShow] = useState(false);
	const handleShow = (updatedValue) => setShow(updatedValue);
	const contextPayload = { show, onShow: handleShow };
	const dispatch = useDispatch();

	return (
		<Context.Provider value={contextPayload}>
			<Overlay onClick={() => dispatch(onHideSpecProducts())} />
			<Root show={show}>
				<Header>
					<Title>Productos</Title>
					<ButtonClose
						role="button"
						onClick={() => dispatch(onHideSpecProducts())}
					>
						<i className="fas fa-times" />
					</ButtonClose>
				</Header>
				<Panels>
					<Filters>
						{Children.map(filtersPanels, (child, index) =>
							cloneElement(child, { key: `filter-panel-${index}` }),
						)}
					</Filters>
					{children}
				</Panels>
			</Root>
		</Context.Provider>
	);
};

SpecProductsPanelLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SpecProductsPanelLayout;
