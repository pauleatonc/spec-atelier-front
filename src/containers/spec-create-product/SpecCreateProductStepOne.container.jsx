import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	onHideSpecCreateProduct,
	onGetSpecProductsSystems,
	onShowSpecCreateProductStepTwoSuccess,
} from './SpecCreateProduct.actions';
import { onGetSpecProductsSections } from '../spec-products-sections/SpecProductsSections.actions';
import { onGetSpecProductsItems } from '../spec-products-items/SpecProductsItems.actions';
import { useInput, useMultiSelect } from '../../components/inputs/Inputs.hooks';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import StepsBubbles from '../../components/basics/StepsBubbles';
import Input from '../../components/inputs/Input';
import Button from '../../components/buttons/Button';
import {
	Root,
	Header,
	Title,
	CloseIcon,
	Body,
	Section,
	Footer,
} from './SpecCreateProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';
import MultiSelect from '../../components/inputs/MultiSelect';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

/**
 * The SpecCreateProductStepOne's container.
 */
const SpecCreateProductStepOne = () => {
	const { name, show } = useSelector(
		(state) => state.specCreateProduct.stepOne,
	);
	const { collection: sections } = useSelector(
		(state) => state.specProductsSections,
	);
	const { collection: items = [] } = useSelector(
		(state) => state.specProductsItems,
	);
	const { systemsCollection: systems = [] } = useSelector(
		(state) => state.specCreateProduct,
	);
	const dispatch = useDispatch();
	const {
		onChange: handleNameChange,
		set: setNameValue,
		value: nameValue,
	} = useInput(name);

	const {
		onChange: onSectionChange,
		set: setSectionValue,
		values: sectionValues,
	} = useMultiSelect();

	const {
		onChange: onItemChange,
		set: setItemValue,
		values: itemValues = [],
	} = useMultiSelect([]);

	const {
		onChange: onSystemChange,
		set: setSystemValues,
		values: systemValues = [],
	} = useMultiSelect([]);

	const handleSectionChange = (option) => {
		onSectionChange(option);
		setItemValue([]);
		setSystemValues([]);
	};

	const onSubmitSection = () => {
		dispatch(onGetSpecProductsItems({ sections: sectionValues }));
		setItemValue([]);
		setSystemValues([]);
	};

	const handleItemChange = (option) => {
		onItemChange(option);
		setSystemValues([]);
	};

	const onSubmitItem = () => {
		dispatch(onGetSpecProductsSystems({ items: itemValues }));
	};

	const handleSystemChange = (option) => {
		onSystemChange(option);
	};

	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideSpecCreateProduct()),
		exitingCallback: () => {
			setNameValue('');
			setSectionValue([]);
			setItemValue([]);
			setSystemValues([]);
		},
	});
	const handleNext = () =>
		dispatch(
			onShowSpecCreateProductStepTwoSuccess({
				name: nameValue,
				section: sectionValues,
				item: itemValues,
				system: systemValues,
			}),
		);

	const disableSection = !systemValues.length;
	const disabledNext = !nameValue || !itemValues.length || disableSection;

	useEffect(() => {
		if (!show) {
			return;
		}

		dispatch(onGetSpecProductsSections());
	}, [show]);

	const mapToSelector = (sectionOption) => ({
		...sectionOption,
		label: sectionOption.name,
		value: sectionOption.id,
	});

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Root>
				<Header>
					<Title>Crear producto</Title>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</Header>
				<Body>
					<Section>
						<StepsBubbles
							prefix="step-1"
							steps={[{ active: true }, { active: false }, { active: false }]}
						/>
					</Section>
					<Section padding="41px 0 0">
						<Input
							type="form"
							label="Nombre del producto"
							placeholder="Nombre"
							value={nameValue}
							width="490px"
							onChange={handleNameChange}
						/>
					</Section>
					<Section
						alignItems="flex-end"
						display="grid"
						gridTemplateColumns="1fr 1fr 1fr"
						padding="36px 0 0"
					>
						<MultiSelect
							changeOnCLose={false}
							showButtons
							options={sections.map(mapToSelector)}
							placeholder="Categoriza el producto"
							values={sectionValues}
							onChange={handleSectionChange}
							onSubmit={onSubmitSection}
							optionAll={false}
						/>
						<MultiSelect
							changeOnCLose={false}
							showButtons
							options={items.map(mapToSelector)}
							placeholder="Elige una partida"
							values={itemValues || []}
							onChange={handleItemChange}
							onSubmit={onSubmitItem}
							optionAll={false}
							disabled={!items.length}
						/>
						<MultiSelect
							changeOnCLose={false}
							showButtons
							options={systems.map(mapToSelector)}
							placeholder="Elige un sistema"
							values={systemValues || []}
							onChange={handleSystemChange}
							onSubmit={handleSystemChange}
							optionAll={false}
							disabled={!systems.length}
						/>
					</Section>
				</Body>
				<Footer>
					<Button
						disabled={disabledNext}
						variant={VARIANTS_BUTTON.PRIMARY}
						width="163px"
						onClick={handleNext}
					>
						Siguiente
					</Button>
				</Footer>
			</Root>
		</ModalLayout>
	);
};

export default SpecCreateProductStepOne;
