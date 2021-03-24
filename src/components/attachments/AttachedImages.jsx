import React, { useCallback, useState, useEffect } from 'react';
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
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

/**
 * The AttachedImages' component.
 */
const AttachedImages = props => {
  const { images, label, onChange, onReject, showModal, maxSize, onClose, hideItems } = props;
  const [show, setShow] = useState(showModal);
  const handleOpen = () => setShow(true);
  const handleClose = () => {
    onClose();
    setShow(false);
  }
  const handleDrop = useCallback((acceptedImages = []) => {
    const allImages = [...images, ...acceptedImages];
    const attachedImages = acceptedImages.reduce((imgs, image) => {
      if (imgs.length >= maxSize) {
        return imgs;
      }

      return imgs.concat(image);
    }, [].concat(images));

    handleClose();

    if (allImages.length > maxSize) {
      onReject(`Puedes subir solo hasta ${maxSize} imágene${maxSize === 1 ? '' : 's'}`);
    }

    onChange(attachedImages);
  }, [images]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png',
    onDrop: handleDrop,
  });
  const { onClick: handleAttach, ...dropProps } = getRootProps();
  const handleRemove = (attachedImage, attachedIndex) => () => {
    const updatedAttachedImages = images.filter((image, index) =>
      !(image.name === attachedImage.name && index === attachedIndex),
    );

    onChange(updatedAttachedImages);
  };
  useEffect(() => {
    setShow(showModal);
  }, [showModal]);
  return (
    <Root>
      {!hideItems && (
        <>
          {label && <Label>{label}</Label>}
          <Box>
            {images.length === 0 && (
              <Empty>
                <EmptyHeader>
                  <DropIcon alt="" src={imagesUploadSource} />
                </EmptyHeader>
                <EmptyBody>
                  <EmptyAction onClick={handleOpen}>Sube imágene{maxSize === 1 ? '' : 's'}</EmptyAction>
                  <EmptyText>Puedes subir hasta {maxSize} imágene{maxSize === 1 ? '' : 's'}</EmptyText>
                </EmptyBody>
              </Empty>
            )}
            {images.length > 0 && (
              <List>
                {images.map((image, index) => (
                  <Item key={index} source={URL.createObjectURL(image)}>
                    <Square onClick={handleRemove(image, index)}>
                      <img alt="" src={removeSource} />
                    </Square>
                  </Item>
                ))}
              </List>
            )}
          </Box>
          {images.length > 0 && <Action onClick={handleOpen}>Sube imágene{maxSize === 1 ? '' : 's'}</Action>}
        </>
      )}
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
              <Button variant={VARIANTS_BUTTON.PRIMARY} onClick={handleAttach}>
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
  onClose: () => undefined,
  showModal: false,
  maxSize: 5,
  hideItems: false,
};
AttachedImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(window.File),
      PropTypes.object,
    ])
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onReject: PropTypes.func,
  showModal: PropTypes.bool,
  maxSize: PropTypes.number,
  hideItems: PropTypes.bool,
};

export default AttachedImages;
