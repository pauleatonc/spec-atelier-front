import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddSpecBlockImage } from '../spec-document/SpecDocument.actions';
import { onHideSpecImagesModalSuccess } from './SpecImagesModal.actions';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import Button from '../../components/buttons/Button';
import { Root, Header, Title, CloseIcon, Body, Figures, Figure, Image, CheckIcon, Footer } from './SpecImagesModal.styles';
import closeSource from '../../assets/images/icons/close.svg';
import checkSource from '../../assets/images/icons/check.svg';

/**
 * The SpecImagesModal's container.
 */
const SpecImagesModal = () => {
  const { blocks } = useSelector(state => state.specDocument);
  const { selectedBlockID, show } = useSelector(state => state.specImagesModal);
  const dispatch = useDispatch();
  const selectedProductBlock = blocks.find(block => block.id === selectedBlockID) || {};
  const [selectedImage, setSelectedImage] = useState(selectedProductBlock.image || '');
  const { onClose: handleClose } = useModal({ closeCallback: () => dispatch(onHideSpecImagesModalSuccess()) });
  const handleSelectImage = selected => () => {
    if (selected === selectedImage) {
      return setSelectedImage('');
    }

    return setSelectedImage(selected);
  };
  const handleSubmit = (blockID, imageID) => event => {
    handleClose(event);
    dispatch(onAddSpecBlockImage({ blockID, imageID }));
  }
  const disableSubmit = !selectedProductBlock?.images?.length || selectedProductBlock?.images?.length === 0 || selectedImage === '';

  useEffect(() => {
    setSelectedImage(selectedProductBlock.image);
  }, [selectedProductBlock.image]);

  return (
    <ModalLayout show={show} onClose={handleClose}>
      <Root>
        <Header>
          <Title>Selecciona una de las imágenes para la especificación:</Title>
          <CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
        </Header>
        <Body>
          <Figures>
            {selectedProductBlock?.images?.map((image, index) => (
              <Figure key={`block-image-${index}`} selected={index === selectedImage} onClick={handleSelectImage(index)}>
                <Image selected={index === selectedImage} source={image?.urls?.thumb || '#'} />
                {index === selectedImage && <CheckIcon src={checkSource} />}
              </Figure>
            ))}
          </Figures>
        </Body>
        <Footer>
          <Button
            disabled={disableSubmit}
            variant="primary"
            onClick={handleSubmit(selectedProductBlock.id, selectedImage)}
          >
            Añadir
          </Button>
        </Footer>
      </Root>
    </ModalLayout>
  );
};

export default SpecImagesModal;
