import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onHideSpecCreateProduct, onHideSpecCreateProductStepTwo, onShowSpecCreateProductStepThree } from './SpecCreateProduct.actions';
import { useTextarea, useAutocomplete, useInput } from '../../components/inputs/Inputs.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import StepsBubbles from '../../components/basics/StepsBubbles';
import Textarea from '../../components/inputs/Textarea';
import Autocomplete from '../../components/inputs/Autocomplete';
import Input from '../../components/inputs/Input';
import Button from '../../components/buttons/Button';
import { Root, Header, Title, CloseIcon, Body, Section, Footer, Gap } from './SpecCreateProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';

/**
 * The SpecCreateProductStepTwo's container.
 */
const SpecCreateProductStepTwo = () => {
  const { brand, description, price, show } = useSelector(state => state.specCreateProduct.stepTwo);
  const dispatch = useDispatch();
  const { handler: handleDescriptionChange, set: setDescriptionValue, value: descriptionValue } = useTextarea(description);
  const { handler: handleBrandChange, set: setBrandValue, value: brandValue } = useAutocomplete(brand);
  const { handler: handlePriceChange, set: setPriceValue, value: priceValue } = useInput(price, 'currency');
  const handleClose = () => dispatch(onHideSpecCreateProduct());
  const handleExiting = () => {
    setDescriptionValue('');
    setBrandValue({});
    setPriceValue('');
  };
  const handlePrev = () => dispatch(onHideSpecCreateProductStepTwo());
  const handleNext = () => dispatch(onShowSpecCreateProductStepThree({
    description: descriptionValue,
    brand: brandValue,
    price: priceValue,
  }));
  const disabledNext = !descriptionValue || !brandValue.label || !priceValue;

  return (
    <ModalLayout overlay={false} show={show} transition={false} onClose={handleClose} onExiting={handleExiting}>
      <Root shadow={false}>
        <Header>
          <Title>Crear producto</Title>
          <CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
        </Header>
        <Body>
          <Section>
            <StepsBubbles prefix="step-2" steps={[{ active: true }, { active: true }, { active: false }]} />
          </Section>
          <Section display="grid" gridTemplateColumns="1.5fr 1fr" padding="41px 0 0">
            <Textarea 
              label="Agregar el texto que específica el producto"
              placeholder="Detalla el producto"
              value={descriptionValue || ''}
              onChange={handleDescriptionChange}
            />
            <Section display="grid" gridGap="46px" gridTemplateRows="1fr 1fr">
              <Autocomplete
                label="¿Qué marca es?"
                options={[]}
                placeholder="Elige una marca"
                value={brandValue}
                onChange={handleBrandChange}
              />
              <Input
                label="¿Qué valor tiene?"
                placeholder="Valor del producto"
                value={priceValue}
                onChange={handlePriceChange}
              />
            </Section>
          </Section>
        </Body>
        <Footer>
          <Button variant="cancel" width="163px" onClick={handlePrev}>Atrás</Button>
          <Gap />
          <Button
            disabled={disabledNext}
            variant="primary"
            width="163px"
            onClick={handleNext}
          >
            Siguiente
          </Button>
        </Footer>
      </Root>
    </ModalLayout>
  );
};

export default SpecCreateProductStepTwo;
