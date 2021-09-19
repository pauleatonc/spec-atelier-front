import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, Modal, Button, Image, DownloadDocumentsIcons } from '../../components/SpecComponents';
import {
  ButtonClose,
  Container,
  Content,
  Section,
  ImagesContent,
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
  ContentImage,
  ContentDataProduct,
  TitleProductName,
  ProductDesc,
  ProductSpan,
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
import noPhoto from '../../assets/images/icons/no-photo.svg';
import { useFormik } from 'formik';
import { closeModal, sendQuoteA } from './SpecModalQuote.actions';
import * as Yup from 'yup';

const SpecModalQuote = ({initialValues}) => {
  const dispatch = useDispatch();
  let isMounted = true;
  const getFirstImg = data => (data?.images?.length && data.images[0]) || {};
  const { product, showModalQuote } = useSelector(state => state.specModalQuote);
  const { project } = useSelector((state) => state.specDocument);
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = img => () => selectImg(img);

  const onCloseModal = () => {
    dispatch(closeModal(resetForm))
  };

  const FormContactSchema = Yup.object().shape({
		name: Yup.string().required('El nombre es requerido'),
		email: Yup.string().email('Email invalido').required('El correo es requerido'),
		//company: Yup.string().required('La empresa es requerida').nullable(),
		description: Yup.string().required('La descripción es requerida'),
	});
  
  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    resetForm,
	} = useFormik({
		initialValues,
    onSubmit: (vals) => {
			const body = {
          product_quote:{
            message: vals.description,
            contact_email: vals.email,
            contact_company: vals.company,
            contact_name: vals.name,
            project_spec_id: project.id
          }};
      const params = {
        id: product.id,
        data: body
      }
      dispatch(sendQuoteA(params));
		},
    validationSchema: FormContactSchema,
	});
  const photoStyles = {
		backgroundImage: `url('${product?.images[0].urls.original || noPhoto}')`,
		backgroundSize: product?.images[0].urls.original ? 'cover' : 'initial',
	};
  if (!showModalQuote) return null;
  if (!product || !product.id) return <></>
  return (
    <Modal show={showModalQuote} onClose={onCloseModal}>
      <Container>
        <Content>
          <ButtonClose
            role="button"
            tabIndex="0"
            onKeyDown={onCloseModal}
            onClick={onCloseModal}
          >
            <i className="fas fa-times" />
          </ButtonClose>
           
          <Section>

            <ProductSection>
              <GroupTitle>
                <TitleProduct>Este es el producto que quieres cotizar:</TitleProduct>
              </GroupTitle>
              <ContentProduct>
                <Root>
                <Content2>
                  <Photo style={photoStyles} />
                  <Details>
                    <Title2>{product.name}</Title2>
                    <Description>{product.short_desc || product.long_desc}</Description>
                    <Category>
                      {product.system?.name ? `Sistema constructivo: ${product.system?.name}` : ''}
                    </Category>
                    <Reference>{`Referencia ${
                      product.reference || 'sin especificar'
                    }`}</Reference>
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
                  <MessageRequired>{errors.name ? errors.name : ''}</MessageRequired>
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Empresa</TitleGroup>
                  <TableInput
                    name="company"
                    onChange={handleChange}
                    value={values.company}
                    isRequired={errors.company}
                  />
                  <MessageRequired>{errors.company? errors.company : ''}</MessageRequired>
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Correo</TitleGroup>
                  <TableInput
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    isRequired={errors.email}
                  />
                  <MessageRequired>{errors.email ? errors.email:''}</MessageRequired>
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Mensaje</TitleGroup>
                  <TextAreaForm
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    isRequired={errors.description}
                  />
                  <MessageRequired>{errors.description ? errors.description:''}</MessageRequired>
                </GroupInput>
                <ButtonQuote onClick={handleSubmit}>
                  <TitleButton>Solicitar cotización</TitleButton>
                </ButtonQuote>
            </form>
            </ContactSection>
          </Section>
        </Content>
      </Container>
    </Modal>
  );
};

export default SpecModalQuote;
