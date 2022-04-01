import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, sendQuoteA } from './SpecModalQuote.actions';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { Loading, Modal } from '../../components/SpecComponents';
import CloseButton from '../../components/buttons/CloseButton';
import {
  Container,
  Content,
  Section,
  ProductSection,
  ContactSection,
  TitleContact,
  TitleGroup,
  GroupInput,
  GroupTitle,
  TitleProduct,
  ButtonQuote,
  TitleButton,
  ContentProduct,
  TextAreaForm,
  TableInput,
  MessageRequired,
  Root,
  Content2,
  Photo,
  Details,
  Title2,
  Description,
  Category,
  Reference,
} from './SpecModalQuote.styles';
import { BottonContainer } from '../modal-contact-form/ModalContactForm.styles';
import { NO_PHOTO } from '../../assets/Images';

const SpecModalQuote = ({ initialValues }) => {
  const dispatch = useDispatch();
  const { product, showModalQuote } = useSelector(
    (state) => state.specModalQuote,
  );
  const { project } = useSelector((state) => state.specDocument);

  const FormContactSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El correo es requerido'),
    description: Yup.string().required('El mensaje es requerido'),
  });

  const { handleChange, handleSubmit, errors, values, resetForm } = useFormik({
    initialValues,
    onSubmit: (vals) => {
      const body = {
        product_quote: {
          message: vals.description,
          contact_email: vals.email,
          contact_company: vals.company,
          contact_name: vals.name,
          project_spec_id: project.id,
        },
      };
      const params = {
        id: product.id,
        data: body,
      };
      dispatch(sendQuoteA(params));
      dispatch(
        onShowAlertSuccess({
          message: 'Hemos enviado la solicitud de la cotización.',
        }),
      );
      dispatch(closeModal(resetForm));
    },
    validationSchema: FormContactSchema,
  });
  const photoStyles = {
    backgroundImage: `url('${product?.images[0].urls.original || NO_PHOTO}')`,
    backgroundSize: product?.images[0].urls.original ? 'cover' : 'initial',
  };

  const onCloseModal = () => dispatch(closeModal(resetForm));

  const errorsLength = Object.keys(errors).length;
  if (!showModalQuote) return null;

  return (
    <Modal show={showModalQuote} onClose={onCloseModal}>
      {!product || !product.id ? (
        <Loading />
      ) : (
        <Container>
          <Content>
            <BottonContainer>
              <CloseButton onKeyDown={onCloseModal} onClick={onCloseModal} />
            </BottonContainer>
            <Section>
              <ProductSection>
                <GroupTitle>
                  <TitleProduct>
                    Este es el producto que quieres cotizar:
                  </TitleProduct>
                </GroupTitle>
                <ContentProduct>
                  <Root>
                    <Content2>
                      <Photo style={photoStyles} />
                      <Details>
                        <Title2>{product.name}</Title2>
                        <Description>
                          {product.short_desc || product.long_desc}
                        </Description>
                        <Category>
                          {product.system?.name
                            ? `Sistema constructivo: ${product.system?.name}`
                            : ''}
                        </Category>
                        <Reference>
                          {`Referencia ${
                            product.reference || 'sin especificar'
                          }`}
                        </Reference>
                      </Details>
                    </Content2>
                  </Root>
                </ContentProduct>
              </ProductSection>
              <ContactSection>
                <form>
                  <TitleContact>Datos de contacto:</TitleContact>
                  <GroupInput>
                    <TitleGroup>Nombre</TitleGroup>
                    <TableInput
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      isRequired={errors.name}
                    />
                    <MessageRequired>
                      {errors.name ? errors.name : ''}
                    </MessageRequired>
                  </GroupInput>
                  <GroupInput>
                    <TitleGroup>Empresa</TitleGroup>
                    <TableInput
                      name="company"
                      onChange={handleChange}
                      value={values.company}
                      isRequired={errors.company}
                    />
                    <MessageRequired>
                      {errors.company ? errors.company : ''}
                    </MessageRequired>
                  </GroupInput>
                  <GroupInput>
                    <TitleGroup>Correo</TitleGroup>
                    <TableInput
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      isRequired={errors.email}
                    />
                    <MessageRequired>
                      {errors.email ? errors.email : ''}
                    </MessageRequired>
                  </GroupInput>
                  <GroupInput>
                    <TitleGroup>Mensaje</TitleGroup>
                    <TextAreaForm
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                      isRequired={errors.description}
                    />
                    <MessageRequired>
                      {errors.description ? errors.description : ''}
                    </MessageRequired>
                  </GroupInput>
                  <ButtonQuote
                    onClick={handleSubmit}
                    style={{
                      cursor: errorsLength > 0 ? 'not-allowed' : 'pointer',
                    }}
                    disabled={errorsLength > 0 ? 'true' : ''}
                  >
                    <TitleButton>Solicitar cotización</TitleButton>
                  </ButtonQuote>
                </form>
              </ContactSection>
            </Section>
          </Content>
        </Container>
      )}
    </Modal>
  );
};

export default SpecModalQuote;
