import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeBrandModal } from '../brands-list/BrandsList.actions';
import { Modal } from '../../components/SpecComponents';
import ContactForm from '../contact-form/ContactForm.container';

const BrandModal = () => {
  const { selectedBrand, showBrandModal } = useSelector(state => state.brandsList);
  const dispatch = useDispatch();
  const onCloseModal = () => dispatch(closeBrandModal());
  return (
    <Modal isOpen={showBrandModal && selectedBrand} onClose={onCloseModal} size="md">
      <ContactForm />
    </Modal>
  );
};

export default BrandModal;