import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, Modal, Button, Image, DownloadDocumentsIcons } from '../../components/SpecComponents';
import {
  ButtonClose,
  Container,
  Content,
  HeaderProduct,
  Title,
  Section,
  ImagesContainer,
  ImagesContent,
  ProductImageSelectedContainer,
  ProductImageSelected,
  InfoContainer,
  InfoContent,
  ProductName,
  ProductDescription,
  ProductBrand,
  Actions,
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
} from './SpecModalQuote.styles';
import { useFormik } from 'formik';
import { closeModal } from './SpecModalQuote.actions';
//import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';
import CurrentInputModal from './components/CurrentInputModal';
import CurrentTextrModal from './components/CurrentTextModal';

const SpecModalQuote = ({initialValues}) => {
  const dispatch = useDispatch();
  let isMounted = true;
  const getFirstImg = data => (data?.images?.length && data.images[0]) || {};
  const { product, showModalQuote } = useSelector(state => state.specModalQuote);
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = img => () => selectImg(img);
 
  // console.log(first_name);

  const onCloseModal = () => {
    dispatch(closeModal())
  };
  
  const {
    handleChange,
    handleSubmit,
    values,
	} = useFormik({
		initialValues,
    onSubmit: (vals) => {
			const params = {
				...vals,
			};
      console.log(params);
			//dispatch(sendContactData(params));
		},
	});
  //console.log(values, initialValues);
  

  if (!showModalQuote) return null;
  if (!product || !product.id) return <Loading />

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
                <ContentImage>
                  <ImagesContent>
                    <Image src={product?.images[0]?.urls?.medium} type="responsive" height="122px" width="100px" objectFit="contains"/>
                  </ImagesContent>
                </ContentImage>
                <ContentDataProduct>
                  <TitleProductName>{product.name}</TitleProductName>
                  <ProductDesc>{product.long_desc}</ProductDesc>
                  <ProductSpan>{`Referencia: ${product?.systems?.first?.name || ''}: ${product?.brand?.name || ''}`}</ProductSpan>
                </ContentDataProduct>
              </ContentProduct>
            </ProductSection>

            <ContactSection>
            <form>
              <TitleContact>Datos de contacto:</TitleContact>
                <GroupInput>
                  <TitleGroup>Nombre</TitleGroup>
                  <CurrentInputModal 
                    name="name"
                    tableInputType="name"
                    onChange={handleChange}
                    value={values.first_name}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Empresa</TitleGroup>
                  <CurrentInputModal
                    name="company"
                    tableInputType="company"
                    onChange={handleChange}
                    value={values.company}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Correo</TitleGroup>
                  <CurrentInputModal
                    name="email"
                    tableInputType="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Descripción</TitleGroup>
                  <CurrentTextrModal
                    name="description"
                    onChange={handleChange}
                    tableInputType="description"
                    value={values.description}
                  />
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
