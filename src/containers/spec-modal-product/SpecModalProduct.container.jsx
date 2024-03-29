import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  Loading,
  Modal,
  Button,
  Image,
  DownloadDocumentsIcons,
} from '../../components/SpecComponents';
import {
  Container,
  Content,
  Header,
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
  AddButtonContainer,
} from './SpecModalProduct.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { closeModal, getImageSizeData } from './SpecModalProduct.actions';
import { onAttachSpecProduct, onDetachSpecProduct } from '../spec-document/SpecDocument.actions';
import { onShowAttachModal, onHideAttachModal } from '../spec-products/SpecProducts.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';
import CloseButton from '../../components/buttons/CloseButton';

const SpecModalProduct = () => {
  const { id: specID } = useParams();
  const getFirstImg = (data) => (data?.images?.length && data.images[0]) || {};
  const { product, showModalProduct, hasProduct } = useSelector(
    (state) => state.specModalPorduct,
  );
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = (img) => () => selectImg(img);
  const dispatch = useDispatch();
  const onCloseModal = () => dispatch(closeModal());
  const isRegisteredClient = !!product?.client.id && !!product?.client.name;

  useEffect(() => {
    if (product && showModalProduct) {
      selectImg(getFirstImg(product));
    }
  }, [product, showModalProduct]);

  useEffect(() => {
    if (selectedImg?.urls?.medium)
      dispatch(getImageSizeData(selectedImg?.urls?.medium));
  }, [selectedImg]);

  const onContact = () =>
    dispatch(
      openContactModal({
        selectedClient: product.client,
        selectedProduct: product,
      }),
    );

  if (!showModalProduct) return null;
  if (!product || !product?.id) return <Loading />;

  const handleAttachSpecProduct = () => {
    dispatch(onHideAttachModal());
    const item = product.items.map(({ id }) => id);
    const section = [];
    product.items.forEach(({ section_id }) => {
      if (!section.includes(section_id)) {
        section.push(section_id);
      }
    });
    return dispatch(
      onAttachSpecProduct({
        productID: product?.id,
        specID,
        systemID: product?.systems[0]?.id,
        item,
        section,
      }),
    );
  };

  const handleAddProduct = () => {
    if (product.items.length > 1)
      return dispatch(onShowAttachModal({ product }));
    if (hasProduct) return dispatch(onDetachSpecProduct({ product, specID }));

    return handleAttachSpecProduct();
  };

  const getButtonText = () => {
    if (product.items.length > 1) return 'Añadir / Remover';
    if (hasProduct) return 'Remover';
    return 'Añadir';
  };

  return (
    <Modal show={showModalProduct} onClose={onCloseModal}>
      <Container>
        <Content>
          <Header>
            <Title>{`${product.name} / ${product.short_desc}`}</Title>
            <CloseButton onKeyDown={onCloseModal} onClick={onCloseModal} />
          </Header>
          <Section>
            <ImagesContainer>
              {!!product?.images?.length &&
                product.images.map((img, i) => (
                  <ImagesContent
                    key={img.id}
                    role="button"
                    tabIndex={i}
                    onKeyDown={onSelectImg(img)}
                    onClick={onSelectImg(img)}
                    active={
                      !!(
                        img.id &&
                        img.id === selectedImg.id &&
                        product?.images?.length > 1
                      )
                    }
                  >
                    <Image
                      src={img?.urls?.medium || img?.urls?.original}
                      type="responsive"
                      height="80px"
                      maxWidth="100%"
                      objectFit="contains"
                    />
                  </ImagesContent>
                ))}
            </ImagesContainer>
            {/* Image primary */}
            <ProductImageSelectedContainer>
              <ProductImageSelected>
                <Image
                  src={selectedImg?.urls?.medium || selectedImg?.urls?.original}
                  type="responsive"
                  height="240px"
                  objectFit="contains"
                />
              </ProductImageSelected>
            </ProductImageSelectedContainer>
            {/* Info Product */}
            <InfoContainer>
              <InfoContent>
                <ProductName>{product.reference}</ProductName>
                <ProductDescription>{product.long_desc}</ProductDescription>
                <ProductBrand>
                  {`Referencia: ${product?.systems?.first?.name || ''}: ${product?.brand?.name || ''
                    }`}
                </ProductBrand>
                <Actions>
                  {isRegisteredClient && (
                    <Button
                      variant={VARIANTS_BUTTON.SECONDARY}
                      onClick={onContact}
                    >
                      Contactar
                    </Button>
                  )}
                  <DownloadDocumentsIcons
                    pdfs={product?.pdfs}
                    dwg={product?.dwg}
                    bim={product?.bim}
                    isDetail
                    productId={product?.id}
                  />
                </Actions>
              </InfoContent>
            </InfoContainer>
          </Section>
        </Content>
        <AddButtonContainer>
          <Button
            variant={VARIANTS_BUTTON.PRIMARY}
            width="100%"
            onClick={handleAddProduct}
          >
            {getButtonText()}
          </Button>
        </AddButtonContainer>
      </Container>
    </Modal>
  );
};

export default SpecModalProduct;
