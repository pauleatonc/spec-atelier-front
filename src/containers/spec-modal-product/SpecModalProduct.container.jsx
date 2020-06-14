import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, Modal, Button } from '../../components/SpecComponents';
import {
  Container,
  Content,
  Header,
  Title,
  Section,
  ImagesContainer,
  ImagesContent,
  ProductImage,
  ProductImageSelectedContainer,
  ProductImageSelected,
  InfoContainer,
  InfoContent,
  ProductName,
  ProductDescription,
  ProductBrand,
  Actions,
  ButtonContact,
  Icons,
  Icon,
} from './SpecModalProduct.styles';
import noPhoto from '../../assets/images/icons/no-photo.svg';
import { closeModal } from './SpecModalProduct.actions';


const SpecModalProduct = () => {
  const { product, showModalProduct } = useSelector(state => state.specModalPorduct);
  const [selectedImg, selectImg] = useState((product?.images?.length && product.images[0]) || {});
  const onSelectImg = img => () => selectImg(img);
  const dispatch = useDispatch();
  const noImgText = 'sin imágen';

  // TODO: This will go to contact view.
  const onContact = () => { };
  const onCloseModal = () => dispatch(closeModal());

  // Download documents 
  const handleIconClick = documents => () => {
    documents.forEach(async doc => {
      const link = document.createElement("a");
      link.download = doc;
      link.href = doc;
      link.target = '_blank';
      link.id = 'doc';
      document.body.appendChild(link);
      link.click();
      return setTimeout(() => document.body.removeChild(link), 2000);
    });
  }
  
  if (!showModalProduct) return null;
  if (!product || !product.id) return <Loading />

  return (
    <Modal isOpen={showModalProduct} onClose={onCloseModal}>
      <Container>
        <Content>
          <Header>
            <Title>
              {`${product.name} / ${product.short_desc}`}
            </Title>
          </Header>
          <Section>
            <ImagesContainer>
              {!!product?.images?.length && product.images.map(img =>
                <ImagesContent
                  key={img.id}
                  role="button"
                  tabIndex={img.id}
                  onKeyDown={onSelectImg(img)}
                  onClick={onSelectImg(img)}
                >
                  <ProductImage
                    active={img.id === selectedImg.id}
                    src={img.url}
                    alt={`producto ${img.id || noImgText}`}
                  />
                </ImagesContent>
              )}
            </ImagesContainer>
            {/* Image primary */}
            <ProductImageSelectedContainer>
              <ProductImageSelected
                src={selectedImg.url || noPhoto}
                alt={`producto ${selectedImg.id || noImgText}`}
              />
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
                  {`${product?.system?.name || ''}: ${product?.brand?.name || ''}`}
                </ProductBrand>
                <Actions>
                  <Button
                    variant="secondary"
                    onClick={onContact}
                  >
                    Contactar
                  </Button>
                  <Icons>
                    <Icon
                      type="dwg"
                      active={!!product.dwg_url}
                      onClick={handleIconClick([product.dwg_url])}
                    />
                    <Icon
                      type="bim"
                      active={!!product.dwg_url}
                      onClick={handleIconClick([product.bim_url])}
                    />
                    <Icon
                      type="tech"
                      active={!!(Array.isArray(product.spec_pdf_url) && product.spec_pdf_url.length)}
                      onClick={handleIconClick(product.spec_pdf_url)}
                    />
                  </Icons>
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