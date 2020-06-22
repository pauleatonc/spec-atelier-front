import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { onCreateSpecProduct, onHideSpecCreateProduct, onHideSpecCreateProductStepThreeSuccess } from './SpecCreateProduct.actions';
import ModalLayout from '../../components/layouts/ModalLayout';
import StepsBubbles from '../../components/basics/StepsBubbles';
import AttachedImages from '../../components/attachments/AttachedImages';
import AttachedDocuments from '../../components/attachments/AttachedDocuments';
import Button from '../../components/buttons/Button';
import { Root, Loading, Header, Title, CloseIcon, Body, Section, Footer, Gap } from './SpecCreateProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';

/**
 * The SpecCreateProductStepThree's container.
 */
const SpecCreateProductStepThree = () => {
  const { loading } = useSelector(state => state.specCreateProduct);
  const { documents, images, show } = useSelector(state => state.specCreateProduct.stepThree);
  const dispatch = useDispatch();
  const [imagesValues, setImagesValues] = useState(images || []);
  const [documentsValues, setDocumentsValues] = useState(documents || []);
  const handleImagesChange = attachedImages => setImagesValues(attachedImages);
  const handleDocumentsChange = attachedDocuments => setDocumentsValues(attachedDocuments);
  const handleAttachReject = reason => dispatch(onShowAlertSuccess({ message: reason }));
  const handleClose = () => dispatch(onHideSpecCreateProduct());
  const handleEntering = () => {
    setImagesValues(images || []);
    setDocumentsValues(documents || []);
  };
  const handleExited = () => {
    setImagesValues([]);
    setDocumentsValues([]);
  };
  const handlePrev = () => dispatch(onHideSpecCreateProductStepThreeSuccess({
    images: imagesValues,
    documents: documentsValues,
  }));
  const handleCreate = () => dispatch(onCreateSpecProduct({ images: imagesValues, documents: documentsValues }));
  const disabledNext = imagesValues.length === 0 || documentsValues.length === 0;

  return (
    <ModalLayout
      overlay={false}
      show={show}
      transition={false}
      onClose={handleClose}
      onEntering={handleEntering}
      onExited={handleExited}
    >
      <Root shadow={false}>
        <Header>
          <Title>Crear producto</Title>
          <CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
        </Header>
        <Body>
          {loading && <Loading>Creando producto...</Loading>}
          {!loading && (
            <>
              <Section>
                <StepsBubbles prefix="step-3" steps={[{ active: true }, { active: true }, { active: true }]} />
              </Section>
              <Section display="grid" gridTemplateColumns="286px 286px auto" padding="41px 0 0">
                <AttachedImages
                  images={imagesValues}
                  label="Imágenes del producto"
                  onChange={handleImagesChange}
                  onReject={handleAttachReject}
                />
                <AttachedDocuments
                  documents={documentsValues}
                  label="Documentos del producto"
                  onChange={handleDocumentsChange}
                  onReject={handleAttachReject}
                />
              </Section>
            </>
          )}
        </Body>
        <Footer>
          {!loading && (
            <>
              <Button variant="cancel" width="163px" onClick={handlePrev}>Atrás</Button>
              <Gap />
              <Button
                disabled={disabledNext}
                variant="primary"
                width="163px"
                onClick={handleCreate}
              >
                Crear
              </Button>
            </>
          )}
        </Footer>
      </Root>
    </ModalLayout>
  );
};

export default SpecCreateProductStepThree;
