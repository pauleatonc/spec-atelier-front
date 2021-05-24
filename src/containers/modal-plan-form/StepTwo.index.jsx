import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import closeSource from '../../assets/images/icons/close.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import { onHideModalStepTwo, sendContactData } from './actions';
import {
	Container,
	ButtonCloseContainer,
	StepsContainer,
	Step,
	StepText,
	StepNumber,
	ContainerFormPlan,
	TitleForm,
	SubtitleForm,
	ContainerInputs,
	InputForm,
	TextAreaForm,
	ContainerButtons,
	FormPlan,
} from './styles';

const PlanFormStepTwo = () => {
	const {
		plan_type,
		items_total,
		stepTwo: { show },
	} = useSelector((state) => state.modalPlanForm);
	const dispatch = useDispatch();

	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModalStepTwo()),
	});

	const FormContactSchema = Yup.object().shape({
		user_name: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		phone: Yup.string().required('Required'),
		user_company_name: Yup.string().required('Required'),
	});

	const { handleChange, handleSubmit, values, isValid, dirty } = useFormik({
		initialValues: {
			user_name: '',
			email: '',
			phone: '',
			user_company_name: '',
			message: '',
		},
		onSubmit: (vals) => {
			const params = {
				...vals,
				plan_type: plan_type === 'fixed_plan' ? 'fijo' : 'variable',
				items_total,
			};
			dispatch(sendContactData(params));
		},
		validationSchema: FormContactSchema,
	});

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				<StepsContainer mBottom="90" mobileMBottom="48">
					<Step>
						<StepNumber>1</StepNumber>
						<StepText>Plan</StepText>
					</Step>
					<Step activeStep>
						<StepNumber>2</StepNumber>
						<StepText>Datos de la empresa</StepText>
					</Step>
				</StepsContainer>
				<ContainerFormPlan>
					<TitleForm>
						Conversemos sobre las necesidades de tu empresa.
					</TitleForm>
					<SubtitleForm>
						Déjanos tus datos y en minutos nos contáctaremos.
					</SubtitleForm>
					<FormPlan>
						<ContainerInputs>
							<InputForm
								name="user_name"
								placeholder="Tu nombre y apellido"
								onChange={handleChange}
								value={values.user_name}
							/>
							<InputForm
								name="email"
								placeholder="Correo electrónico"
								onChange={handleChange}
								value={values.email}
							/>
							<InputForm
								name="phone"
								placeholder="Teléfono de contacto"
								withoutMarginBottom
								onChange={handleChange}
								value={values.phone}
							/>
						</ContainerInputs>
						<ContainerInputs textAreaContainer>
							<InputForm
								name="user_company_name"
								placeholder="Nombre de la empresa"
								onChange={handleChange}
								value={values.user_company_name}
							/>
							<TextAreaForm
								name="message"
								placeholder="Mensaje"
								onChange={handleChange}
								value={values.message}
							/>
						</ContainerInputs>
					</FormPlan>
					<ContainerButtons>
						<Button
							disabled={!(isValid && dirty)}
							onClick={handleSubmit}
							variant={VARIANTS_BUTTON.PRIMARY}
							width="160px"
						>
							Conversemos
						</Button>
					</ContainerButtons>
				</ContainerFormPlan>
			</Container>
		</ModalLayout>
	);
};

export default PlanFormStepTwo;
