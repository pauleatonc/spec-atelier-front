import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, Modal, Button, Image, DownloadDocumentsIcons } from '../../components/SpecComponents';
import {
  ButtonClose,
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
} from './SpecModalProduct.styles';

import { closeModal } from './SpecModalProduct.actions';
import { openContactModal } from '../modal-contact-form/ModalContactForm.actions';

const SpecModalProduct = () => {
  let isMounted = true;
  const getFirstImg = data => (data?.images?.length && data.images[0]) || {};
  const { product, showModalProduct } = useSelector(state => state.specModalPorduct);
  const [selectedImg, selectImg] = useState(getFirstImg());
  const onSelectImg = img => () => selectImg(img);
  const dispatch = useDispatch();
  const onCloseModal = () => dispatch(closeModal());
  const isRegisteredClient = !!product?.client.id && !!product?.client.name;

  useEffect(() => {
    if (product && showModalProduct) selectImg(getFirstImg(product));
  }, [product, showModalProduct]);

  useEffect(() => {
    return () => { isMounted = false };
  }, []);

  const onContact = () => dispatch(openContactModal({
    selectedBrand: product.brand,
    selectedProduct: product,
  }));

  if (!showModalProduct) return null;
  if (!product || !product.id) return <Loading />

  return (
    <Modal show={showModalProduct} onClose={onCloseModal}>
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
          <Header>
            <Title>
              {`${product.name} / ${product.short_desc}`}
            </Title>
          </Header>
          <Section>
            <ImagesContainer>
              {!!product?.images?.length && product.images.map((img, i) =>
                <ImagesContent
                  key={img.id}
                  role="button"
                  tabIndex={i}
                  onKeyDown={onSelectImg(img)}
                  onClick={onSelectImg(img)}
                  active={!!(img.id && img.id === selectedImg.id && product?.images?.length > 1)}
                >
                  <Image src={img?.urls?.medium} type="responsive" height="80px" maxWidth="100%" objectFit="contains"/>
                </ImagesContent>
              )}
            </ImagesContainer>
            {/* Image primary */}
            <ProductImageSelectedContainer>
              <ProductImageSelected>
                <Image src={selectedImg?.urls?.medium} type="cover"  height="240px" objectFit="contains" />
              </ProductImageSelected>
            </ProductImageSelectedContainer>
            {/* Info Product */}
            <InfoContainer>
              <InfoContent>
                <ProductName>
                  {product.reference}
                </ProductName>
                <ProductDescription>
                  {product.long_desc}
                </ProductDescription>
                <ProductBrand>
                  {`Referencia: ${product?.systems?.first?.name || ''}: ${product?.brand?.name || ''}`}
                </ProductBrand>
                <Actions>
                  {
                    isRegisteredClient && 
                    (
                      <Button
                        variant="secondary"
                        onClick={onContact}
                      >
                        Contactar
                      </Button>
                    )
                  }
                  <DownloadDocumentsIcons pdfs={product?.pdfs} dwg={product?.dwg} bim={product?.bim} />
                </Actions>
              </InfoContent>
            </InfoContainer>
          </Section>
        </Content>
      </Container>
    </Modal>
  );
};

export default SpecModalProduct;
