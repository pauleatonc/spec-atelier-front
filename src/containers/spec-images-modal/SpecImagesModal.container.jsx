import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  onAddSpecBlockImage,
  onEditSpecBlockImage,
} from '../spec-document/SpecDocument.actions';
import { onHideSpecImagesModalSuccess } from './SpecImagesModal.actions';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import Button from '../../components/buttons/Button';
import CloseButton from '../../components/buttons/CloseButton';
import {
  Root,
  Header,
  Title,
  Body,
  Figures,
  Figure,
  Image,
  CheckIcon,
  Footer,
} from './SpecImagesModal.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { CHECK_SOURCE } from '../../assets/Images';

/** The SpecImagesModal's container */
const SpecImagesModal = () => {
  const { id: specID } = useParams();
  const { blocks } = useSelector((state) => state.specDocument);
  const { selectedBlockID, show } = useSelector(
    (state) => state.specImagesModal,
  );
  const dispatch = useDispatch();
  const selectedProductBlock =
    blocks.find((block) => block.id === selectedBlockID) || {};
  const [selectedImage, setSelectedImage] = useState(
    selectedProductBlock.element?.image?.image?.id || '',
  );
  const currentImage = selectedProductBlock?.image?.image.id;

  const { onClose: handleClose } = useModal({
    closeCallback: () => dispatch(onHideSpecImagesModalSuccess()),
  });

  const handleSelectImage = (selected) => () => {
    if (selected === selectedImage) {
      return setSelectedImage('');
    }
    return setSelectedImage(selected);
  };

  const handleSubmit = (block, imageID) => (event) => {
    handleClose(event);
    if (!currentImage)
      dispatch(onAddSpecBlockImage({ blockID: block.id, imageID, specID }));
    else if (currentImage !== imageID)
      dispatch(
        onEditSpecBlockImage({ blockImageID: block.image.id, imageID, specID }),
      );
  };

  const disableSubmit =
    !selectedProductBlock?.element?.images?.length ||
    selectedProductBlock?.element?.images?.length === 0 ||
    selectedImage === '';

  useEffect(() => {
    setSelectedImage(selectedProductBlock.element?.image?.id);
  }, [selectedProductBlock.image]);

  return (
    <ModalLayout show={show} onClose={handleClose}>
      <Root>
        <Header>
          <Title>Selecciona una de las imágenes para la especificación:</Title>
          <CloseButton onClick={handleClose} />
        </Header>
        <Body>
          <Figures>
            {selectedProductBlock?.element?.images?.map((image) => (
              <Figure
                key={`block-image-${image.id}`}
                selected={image.id === selectedImage}
                onClick={handleSelectImage(image.id)}
              >
                <Image
                  selected={image.id === selectedImage}
                  source={image?.urls?.small || image?.urls?.original}
                />
                {image.id === selectedImage && <CheckIcon src={CHECK_SOURCE} />}
              </Figure>
            ))}
          </Figures>
        </Body>
        <Footer>
          <Button
            disabled={disableSubmit}
            variant={VARIANTS_BUTTON.PRIMARY}
            onClick={handleSubmit(selectedProductBlock, selectedImage)}
          >
            Añadir
          </Button>
        </Footer>
      </Root>
    </ModalLayout>
  );
};

export default SpecImagesModal;
