import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import ModalLayout from '../layouts/ModalLayout';
import Button from '../buttons/Button';
import {
  Root,
  Label,
  Box,
  DropIcon,
  Empty,
  EmptyHeader,
  EmptyBody,
  EmptyAction,
  EmptyText,
  List,
  Item,
  Square,
  Action,
  DropContent,
  DropCloseIcon,
  DropZone,
  DropZoneSection,
  DropZoneText,
} from './AttachedImages.styles';
import imagesUploadSource from '../../assets/images/icons/images-upload.svg';
import removeSource from '../../assets/images/icons/remove.svg';
import closeSource from '../../assets/images/icons/close.svg';

/**
 * The AttachedImages' component.
 */
const AttachedImages = props => {
  const { images, label, onChange, onReject } = props;
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDrop = useCallback((acceptedImages = []) => {
    const allImages = [...images, ...acceptedImages];
    const attachedImages = acceptedImages.reduce((imgs, image) => {
      if (imgs.length >= 5) {
        return imgs;
      }

      return imgs.concat(image);
    }, [].concat(images));

    handleClose();

    if (allImages.length > 5) {
      onReject('Puedes subir solo hasta 5 imágenes');
    }

    onChange(attachedImages);
  }, [images]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png',
    onDrop: handleDrop,
  });
  const { onClick: handleAttach, ...dropProps } = getRootProps();
  const handleRemove = attachedImage => () => {
    const updatedAttachedImages = images.filter(
      image => image.path !== attachedImage.path && image.name !== attachedImage.name,
    );
      
    onChange(updatedAttachedImages);
  };

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Box>
        {images.length === 0 && (
          <Empty>
            <EmptyHeader>
              <DropIcon alt="" src={imagesUploadSource} />
            </EmptyHeader>
            <EmptyBody>
              <EmptyAction onClick={handleOpen}>Sube imágenes</EmptyAction>
              <EmptyText>Puedes subir hasta 5 imágenes</EmptyText>
            </EmptyBody>
          </Empty>
        )}
        {images.length > 0 && (
          <List>
            {images.map((image, index) => (
              <Item key={index} source={URL.createObjectURL(image)}>
                <Square onClick={handleRemove(image)}>
                  <img alt="" src={removeSource} />
                </Square>
              </Item>
            ))}
          </List>
        )}
      </Box>
      {images.length > 0 && <Action onClick={handleOpen}>Sube imágenes</Action>}
      <ModalLayout show={show} onClose={handleClose}>
        <DropContent>
          <DropCloseIcon alt="" src={closeSource} onClick={handleClose} />
          <DropZone {...dropProps}>
            <input {...getInputProps()} />
            <DropZoneSection padding="33px 0 18px">
              <DropIcon alt="" src={imagesUploadSource} />
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                Arrastra y suelta aquí imágenes JPG o PNG.
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                O también puedes
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection padding="13px 0 0">
              <Button variant="primary" onClick={handleAttach}>
                Cargar imágenes desde la computadora
              </Button>
            </DropZoneSection>
          </DropZone>
        </DropContent>
      </ModalLayout>
    </Root>
  );
};

AttachedImages.defaultProps = {
  label: '',
  onReject: () => undefined,
};
AttachedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.instanceOf(window.File),
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onReject: PropTypes.func,
};

export default AttachedImages;
