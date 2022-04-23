import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/buttons/Button';
import ModalLayout from 'components/layouts/ModalLayout';
import useModal from 'components/layouts/ModalLayout.hooks';
import CloseButton from 'components/buttons/CloseButton';
import { VARIANTS_BUTTON } from 'config/constants/button-variants';
import { onHideModalStepTwo, sendContactData, onHideModal } from './actions';
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
    user_name,
    email,
    phone,
    user_company_name,
    message,
    stepTwo: { show },
  } = useSelector((state) => state.modalPlanForm);
  const dispatch = useDispatch();

  const initialValues = {
    user_name,
    email,
    phone,
    user_company_name,
    message,
  };

  const FormContactSchema = Yup.object().shape({
    user_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    user_company_name: Yup.string().required('Required'),
  });

  const {
    handleChange,
    handleSubmit,
    values,
    isValid,
    dirty,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: (vals) => {
      const params = {
        ...vals,
        plan_type: plan_type === 'fixed_plan' ? 'fijo' : 'variable',
        items_total,
      };
      dispatch(sendContactData(params));
      resetForm({});
    },
    validationSchema: FormContactSchema,
  });

  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideModal(resetForm)),
  });

  const handleBack = () => dispatch(onHideModalStepTwo());

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Container>
        <ButtonCloseContainer>
          <CloseButton onClick={handleClose} />
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
            Déjanos tus datos y en minutos nos contactaremos.
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
              onClick={handleBack}
              variant={VARIANTS_BUTTON.CANCEL}
              width="160px"
            >
              Atrás
            </Button>
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
