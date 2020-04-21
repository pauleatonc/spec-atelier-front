import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loading, Modal } from '../../components/SpecComponents';
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

const SpecModalProduct = () => {
  const { product } = useSelector(state => state.specModalPorduct);
  const { isOpen } = useSelector(state => state.specModal);
console.log('isadsadad', isOpen, product);
  const [selectedImg, selectImg] = useState((product?.images?.length && product.images[0]) || '');
  const onSelectImg = img => () => selectImg(img);

  const noImgText = 'sin imágen';

  // TODO: This will go to contact view.
  const onContact = () => { };

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
  if (!isOpen) return null;
  if (!product || !product.id) return <Loading />

  return (
    <Modal isOpen={isOpen}>
      <Container>
        <Content>
          <Header>
            <Title>
              {`${product.name} / ${product.short_desc}`}
            </Title>
          </Header>
          <Section>
            <ImagesContainer>
              {!!product?.images?.length && product.images.map((img = {}) => (
                <ImagesContent
                  key={img.order}
                  role="button"
                  tabIndex={img.order}
                  onKeyDown={onSelectImg(img.url)}
                  onClick={onSelectImg(img.url)}
                >
                  <ProductImage
                    active={img.order === selectedImg.order}
                    src={img.url}
                    alt={`producto ${img.order || noImgText}`}
                  />
                </ImagesContent>
              ))}
            </ImagesContainer>
            {/* Image primary */}
            <ProductImageSelectedContainer>
              <ProductImageSelected
                src={selectedImg}
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
                  <ButtonContact
                    type="button"
                    value="Contactar"
                    onClick={onContact}
                  />
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