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

const SpecModalQuote = () => {
  let isMounted = true;
  const getFirstImg = data => (data?.images?.length && data.images[0]) || {};
  const { product, showModalQuote, user } = useSelector(state => state.specModalQuote);
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = img => () => selectImg(img);

  const isRegisteredClient = !!product?.client.id && !!product?.client.name;
  //console.log(user?.user?.first_name);

  const onCloseModal = () => {
    dispatch(closeModal())
  };
  // const [data2, setData2] = useState(data);
  //  const handleOnBlurInput = (tableInputType, inputValue) => {
  //   setData(data.map((itemMap) => ({
  //     ...itemMap,
  //     [tableInputType]: inputValue,
  //   })));
	//  };

  const handleSendQuote = () => {
    
  }
  const nameR = user?.user?.first_name ===  null ? '' : user?.user?.first_name === '' ? '' : user?.user?.first_name+' '+user?.user?.last_name;
  console.log(nameR);
  const [nameState, setNameState] = useState(nameR);
  const formik = useFormik({
    initialValues: {
      name: nameR,
      company: user?.user?.company ===  null ? '' : user?.user?.company === '' ? '' : user?.user?.company,
      email: user?.user?.email ===  null ? '' : user?.user?.email === '' ? '' : user?.user?.email,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const dispatch = useDispatch();

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
            <form onSubmit={formik.handleSubmit}>
              <TitleContact>Datos de contacto:</TitleContact>
                <GroupInput>
                  <TitleGroup>Nombre</TitleGroup>
                  <CurrentInputModal 
                    name="name"
                    tableInputType="name"
                    value={formik.values.name}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Empresa</TitleGroup>
                  <CurrentInputModal
                    name="company"
                    tableInputType="company"
                    value={formik.values.company}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Correo</TitleGroup>
                  <CurrentInputModal
                    name="email"
                    tableInputType="email"
                    value={formik.values.email}
                  />
                </GroupInput>
                <GroupInput>
                  <TitleGroup>Descripción</TitleGroup>
                  <CurrentTextrModal
                    tableInputType="description"
                  />
                </GroupInput>
                <ButtonQuote onClick={handleSendQuote}>
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
