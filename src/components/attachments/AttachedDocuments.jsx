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
  Action,
  DropContent,
  DropCloseIcon,
  DropZone,
  DropZoneSection,
  DropZoneText,
} from './AttachedDocuments.styles';
import documentsUploadSource from '../../assets/images/icons/documents-upload.svg';
import closeSource from '../../assets/images/icons/close.svg';
import DocumentItem from './DocumentItem';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

/**
 * The AttachedFiles' component.
 */
const AttachedFiles = props => {
  const { documents, label, onChange, onReject, showModal, hideItems, maxSize } = props;
  const [show, setShow] = useState(showModal);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDrop = useCallback((acceptedDocuments = []) => {
    const allDocuments = [...documents, ...acceptedDocuments];
    const attachedDocuments = acceptedDocuments.reduce((docs, document) => {
      const pdfDocuments = docs.filter(doc => doc.name.includes('.pdf'));
      const dwgDocument = docs.find(doc => doc.name.includes('.dwg'));
      const rvtDocument = docs.find(doc => doc.name.includes('.rvt'));

      if (document.name.includes('.pdf') && pdfDocuments.length >= maxSize - 2) {
        return docs;
      }

      if (document.name.includes('.dwg') && dwgDocument) {
        return docs;
      }

      if (document.name.includes('.rvt') && rvtDocument) {
        return docs;
      }

      if (docs.length >= maxSize) {
        return docs;
      }

      return docs.concat(document);
    }, [].concat(documents));

    handleClose();
    if (allDocuments.length >= maxSize || !attachedDocuments.length) {
      onReject(`Puedes subir hasta ${maxSize} documentos: ${maxSize - 2} PDF, 1 DWG y 1 RVT'`);
    }
    onChange(attachedDocuments);
  }, [documents]);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf, .dwg, .rvt',
    onDrop: handleDrop,
  });
  const { onClick: handleAttach, ...dropProps } = getRootProps();
  const handleRemove = (attachedDocument, attachedIndex) => () => {
    const updatedAttachedDocuments = documents.filter((document, index) =>
      !(document.name === attachedDocument.name && index === attachedIndex),
    );

    onChange(updatedAttachedDocuments);
  };

  return (
    <Root>
      {!hideItems && (
        <>
          {label && <Label>{label}</Label>}
          <Box>
            {documents.length === 0 && (
              <Empty>
                <EmptyHeader>
                  <DropIcon alt="" margin="0 0 15px" src={documentsUploadSource} />
                </EmptyHeader>
                <EmptyBody>
                  <EmptyAction onClick={handleOpen}>Sube documentos</EmptyAction>
                  <EmptyText>{`Puedes subir hasta ${maxSize} documentos: ${maxSize - 2} PDF, 1 DWG y 1 RVT`}</EmptyText>
                </EmptyBody>
              </Empty>
            )}
            {documents.length > 0 && (
              <List>
                {documents.map((document, index) => (
                  <DocumentItem
                    key={document.id || document.name}
                    document={document}
                    index={index}
                    onClickRemove={handleRemove(document, index)}
                  />
                ))}
              </List>
            )}
          </Box>
          {documents.length > 0 && <Action onClick={handleOpen}>Sube documentos</Action>}
        </>
      )}
      <ModalLayout show={show} onClose={handleClose}>
        <DropContent>
          <DropCloseIcon alt="" src={closeSource} onClick={handleClose} />
          <DropZone {...dropProps}>
            <input {...getInputProps()} />
            <DropZoneSection padding="33px 0 18px">
              <DropIcon alt="" src={documentsUploadSource} />
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                Arrastra y suelta aquí documentos PDF, DWG o RVT
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                O también puedes
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection padding="13px 0 0">
              <Button variant={VARIANTS_BUTTON.PRIMARY} onClick={handleAttach}>
                Cargar documentos desde la computadora
              </Button>
            </DropZoneSection>
          </DropZone>
        </DropContent>
      </ModalLayout>
    </Root>
  );
};

AttachedFiles.defaultProps = {
  label: '',
  onReject: () => undefined,
  hideItems: false,
  onClose: () => undefined,
  maxSize: 5,
};
AttachedFiles.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.instanceOf(window.File),
    ])
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onReject: PropTypes.func,
  hideItems: PropTypes.bool,
  maxSize: PropTypes.number,
};

export default AttachedFiles;
