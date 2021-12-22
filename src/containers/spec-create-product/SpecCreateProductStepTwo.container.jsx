import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	onGetSpecProductsBrands,
	onHideSpecCreateProduct,
	onHideSpecCreateProductStepTwoSuccess,
	onShowSpecCreateProductStepThreeSuccess,
} from './SpecCreateProduct.actions';
import {
	useTextarea,
	useAutocomplete,
	useInput,
} from '../../components/inputs/Inputs.hooks';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import StepsBubbles from '../../components/basics/StepsBubbles';
import Textarea from '../../components/inputs/Textarea';
import Autocomplete from '../../components/inputs/Autocomplete';
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
	Gap,
} from './SpecCreateProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

/**
 * The SpecCreateProductStepTwo's container.
 */
const SpecCreateProductStepTwo = () => {
	const {
		show,
		short_desc,
		long_desc,
		reference,
		brand,
		price,
		unit,
	} = useSelector((state) => state.specCreateProduct.stepTwo);
	const { brandsCollection: brands } = useSelector(
		(state) => state.specCreateProduct,
	);
	const dispatch = useDispatch();
	const {
		onChange: handleShortDescChange,
		set: setShortDescValue,
		value: shortDescValue,
	} = useTextarea(short_desc);
	const {
		onChange: handleLongDescChange,
		set: setLongDescValue,
		value: longDescValue,
	} = useTextarea(long_desc);
	const {
		onChange: handleReferenceChange,
		set: setReferenceValue,
		value: referenceValue,
	} = useInput(reference);
	const {
		onChange: handleBrandChange,
		set: setBrandValue,
		value: brandValue,
	} = useAutocomplete(brand);
	const {
		onChange: handlePriceChange,
		set: setPriceValue,
		value: priceValue,
	} = useInput(price, 'currency');
	const {
		onChange: handleUnitChange,
		set: setUnitValue,
		value: unitValue,
	} = useInput(unit);

	const {
		onClose: handleClose,
		onEntering: handleEntering,
		onExited: handleExited,
	} = useModal({
		closeCallback: () => dispatch(onHideSpecCreateProduct()),
		enteringCallback: () => {
			setShortDescValue(short_desc || '');
			setLongDescValue(long_desc || '');
			setReferenceValue(reference, '');
			setBrandValue(brand || {});
			setPriceValue(price || '');
			setUnitValue(unit || '');
		},
		exitedCallback: () => {
			setShortDescValue('');
			setLongDescValue('');
			setReferenceValue('');
			setBrandValue({});
			setPriceValue('');
			setUnitValue('');
		},
	});
	const handlePrev = () =>
		dispatch(
			onHideSpecCreateProductStepTwoSuccess({
				short_desc: shortDescValue,
				long_desc: longDescValue,
				reference: referenceValue,
				brand: brandValue,
				price: priceValue,
				unit: unitValue,
			}),
		);
	const handleNext = () =>
		dispatch(
			onShowSpecCreateProductStepThreeSuccess({
				short_desc: shortDescValue,
				long_desc: longDescValue,
				reference: referenceValue,
				brand: brandValue,
				price: priceValue,
				unit: unitValue,
			}),
		);
	const disabledNext =
		!shortDescValue ||
		!longDescValue ||
		!referenceValue ||
		!brandValue.label ||
		!unitValue;

	useEffect(() => {
		if (!show) {
			return;
		}

		dispatch(onGetSpecProductsBrands());
	}, [show]);

	return (
		<ModalLayout
			overlay={false}
			show={show}
			transition={false}
			onClose={handleClose}
			onEntering={handleEntering}
			onExited={handleExited}
		>
			<Root shadow={false}>
				<Header>
					<Title>Crear producto</Title>
					<CloseIcon alt="Cerrar" className="fas fa-times" onClick={handleClose} />
				</Header>
				<Body>
					<Section>
						<StepsBubbles
							prefix="step-2"
							steps={[{ active: true }, { active: true }, { active: false }]}
						/>
					</Section>
					<Section
						display="grid"
						gridTemplateColumns="1.5fr 1fr"
						padding="41px 0 0"
					>
						<Section display="grid" gridTemplateRows="0fr 1fr">
							<Textarea
								minHeightTextArea="75px"
								label="Descripción corta"
								placeholder="Agregar texto"
								value={shortDescValue || ''}
								onChange={handleShortDescChange}
								maxlength={200}
							/>
							<Textarea
								minHeightTextArea="118px"
								label="Descripción larga"
								placeholder="Agregar texto"
								value={longDescValue || ''}
								onChange={handleLongDescChange}
							/>
						</Section>
						<Section display="grid" gridTemplateRows="1fr 1fr">
							<Input
								type="form"
								label="Referencia"
								placeholder="Referencia"
								value={referenceValue}
								onChange={handleReferenceChange}
							/>
							<Autocomplete
								label="Marca"
								options={brands.map((availableBrand) => ({
									label: availableBrand.name,
									value: availableBrand.id,
								}))}
								placeholder="Elige una marca"
								value={brandValue}
								onChange={handleBrandChange}
							/>
							<Section
								display="grid"
								gridGap="27px"
								gridTemplateColumns="1fr 1fr"
							>
								<Input
									type="form"
									label="Precio"
									placeholder="Valor del producto"
									value={priceValue}
									onChange={handlePriceChange}
								/>
								<Input
									type="form"
									label="Unidad"
									placeholder="Ejemplo kg"
									value={unitValue}
									onChange={handleUnitChange}
								/>
							</Section>
						</Section>
					</Section>
				</Body>
				<Footer>
					<Button
						variant={VARIANTS_BUTTON.CANCEL}
						width="163px"
						onClick={handlePrev}
					>
						Atrás
					</Button>
					<Gap />
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

export default SpecCreateProductStepTwo;
