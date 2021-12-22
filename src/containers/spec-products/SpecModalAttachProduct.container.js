import React, { useState, useEffect } from 'react';
import { Modal, Button } from '../../components/SpecComponents';
import checkboxOffSource from '../../assets/images/icons/checkbox-off.svg';
import checkboxOnSource from '../../assets/images/icons/checkbox-on.svg';
import {
	Container,
	ButtonClose,
	Header,
	Title,
	Section,
	OptionsList,
	SectionName,
	Separator,
	Options,
	Option,
	OptionCheckboxIcon,
	OptionText,
} from './SpecModalAttachProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';

function SpecModalAttachProduct({
	showAttachModal,
	onAttach,
	onDetach,
	onClose,
	product,
}) {
	const { items = [], sections = [], project_spec_info } = product;

	const [selectedOptions, setSelectedOptions] = useState([]);
	const [deselectedOptions, setDeselectedOptions] = useState([]);
	const [toAttachOptions, setToAttachOptions] = useState([]);

	const handleClickOption = (option, selected, isUsed) => {
		let toAttachtUpdatedOptions;
		const updatedDeselectedOptions =
			isUsed && selected
				? deselectedOptions.concat(option)
				: deselectedOptions.filter(
						(selectOption) => selectOption.id !== option.id,
				  );

		setDeselectedOptions(updatedDeselectedOptions);

		const updatedOptions = selected
			? selectedOptions.filter((selectOption) => selectOption.id !== option.id)
			: selectedOptions.concat(option);

		setSelectedOptions(updatedOptions);

		if (!isUsed) {
			toAttachtUpdatedOptions = selected
				? toAttachOptions.filter(
						(selectOption) => selectOption.id !== option.id,
				  )
				: toAttachOptions.concat(option);

			setToAttachOptions(toAttachtUpdatedOptions);
		}
	};

	const handleOnSubmit = () => {
		if (toAttachOptions.length) {
			onAttach(toAttachOptions, product);
			setToAttachOptions([]);
		}
		if (deselectedOptions.length) {
			onDetach(product, deselectedOptions);
			setDeselectedOptions([]);
		}
	};

	useEffect(() => {
		if (project_spec_info) setSelectedOptions(project_spec_info?.items_used);
	}, [project_spec_info]);

	return (
		<Modal show={showAttachModal} onClose={onClose}>
			<Container>
				<Header>
					<Title>¿Dónde quieres añadir la información?</Title>
					<ButtonClose
            className="fas fa-times"
						role="button"
						tabIndex="0"
						alt="Cerrar"
						// src={closeSource}
						onKeyDown={onClose}
						onClick={onClose}
					/>
				</Header>
				<Section>
					<OptionsList>
						{sections.map(({ id, name }) => (
							<Options key={id}>
								<Separator />
								<SectionName>{name}</SectionName>
								{items
									.filter(({ section_id }) => section_id === id)
									.map((item) => {
										const { id: itemId, name: itemName } = item;
										const selected = selectedOptions.find(
											(selectedOption) => selectedOption.id === itemId,
										);
										const isUsed = project_spec_info?.items_used.find(
											(usedOption) => usedOption.id === itemId,
										);
										return (
											<Option
												key={itemId}
												onClick={() =>
													handleClickOption(item, selected, isUsed)
												}
											>
												<OptionCheckboxIcon
													src={selected ? checkboxOnSource : checkboxOffSource}
												/>
												<OptionText>{itemName}</OptionText>
											</Option>
										);
									})}
							</Options>
						))}
					</OptionsList>
					<Button variant="primary" onClick={handleOnSubmit}>
						Guardar
					</Button>
				</Section>
			</Container>
		</Modal>
	);
}

export default SpecModalAttachProduct;
