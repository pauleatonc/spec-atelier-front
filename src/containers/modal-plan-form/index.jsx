import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import { useInput } from '../../components/inputs/Inputs.hooks';
import closeSource from '../../assets/images/icons/close.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { BUSINESS_PLANS } from '../../config/constants/businessPlans';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import { onHideModal, onShowModalStepTwo } from './actions';
import {
	Container,
	ButtonCloseContainer,
	DetailPlanContainer,
	PlanDescription,
	Title,
	Subtitle,
	Separator,
	TitleInfo,
	ItemInfo,
	IconCheck,
	ItemDesc,
	PlanCostContainer,
	ContainerInputCost,
	InputCostContainer,
	InputCost,
	Cost,
	PlanCost,
	PlanPeriod,
	InputCostLabel,
	FooterInfo,
	StepsContainer,
	Step,
	StepText,
	StepNumber,
} from './styles';

const PlanForm = () => {
	const {
		stepOne: { show },
		plan_type,
		items_total,
	} = useSelector((state) => state.modalPlanForm);
	const dispatch = useDispatch();
	const selectedPlan = BUSINESS_PLANS.find((item) => item.id === plan_type);
	const {
		onChange: handleChangeItemsTotalValue,
		set: setItemsTotalValue,
		value: itemsTotalValue,
	} = useInput(items_total);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
		exitingCallback: () => {
			setItemsTotalValue(1);
		},
	});

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				<StepsContainer mBottom="70" mobileMBottom="48">
					<Step activeStep>
						<StepNumber>1</StepNumber>
						<StepText>Plan</StepText>
					</Step>
					<Step>
						<StepNumber>2</StepNumber>
						<StepText>Datos de la empresa</StepText>
					</Step>
				</StepsContainer>
				{selectedPlan && (
					<DetailPlanContainer>
						<PlanDescription>
							<Title>{selectedPlan.title}</Title>
							<Subtitle>{selectedPlan.subtitle}</Subtitle>
							<Separator />
							<TitleInfo>Este plan incluye</TitleInfo>
							{selectedPlan.info.map((item) => (
								<ItemInfo key={item.id}>
									<IconCheck className="fas fa-check" />
									<ItemDesc>{item.text}</ItemDesc>
								</ItemInfo>
							))}
							{!!selectedPlan?.footer && (
								<FooterInfo>{selectedPlan.footer}</FooterInfo>
							)}
						</PlanDescription>
						<PlanCostContainer>
							<ContainerInputCost>
								<InputCostContainer>
									<InputCost
										value={itemsTotalValue}
										onChange={handleChangeItemsTotalValue}
									/>
									<InputCostLabel>{selectedPlan.labelCost}</InputCostLabel>
								</InputCostContainer>
								<Cost>
									<PlanCost>{selectedPlan.cost}</PlanCost>
									<PlanPeriod>{selectedPlan.collectionPeriod}</PlanPeriod>
								</Cost>
							</ContainerInputCost>
							<Button
								variant={VARIANTS_BUTTON.PRIMARY}
								width="160px"
								onClick={() => dispatch(onShowModalStepTwo(itemsTotalValue))}
							>
								Continuar
							</Button>
						</PlanCostContainer>
					</DetailPlanContainer>
				)}
			</Container>
		</ModalLayout>
	);
};

export default PlanForm;
