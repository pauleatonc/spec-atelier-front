import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onHideSpecCreateProduct, onGetSpecProductsSystems, onShowSpecCreateProductStepTwoSuccess } from './SpecCreateProduct.actions';
import { onGetSpecProductsSections } from '../spec-products-sections/SpecProductsSections.actions';
import { onGetSpecProductsItems } from '../spec-products-items/SpecProductsItems.actions';
import { useInput, useSelect } from '../../components/inputs/Inputs.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import StepsBubbles from '../../components/basics/StepsBubbles';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import Button from '../../components/buttons/Button';
import { Root, Header, Title, CloseIcon, Body, Section, Footer } from './SpecCreateProduct.styles';
import closeSource from '../../assets/images/icons/close.svg';

/**
 * The SpecCreateProductStepOne's container.
 */
const SpecCreateProductStepOne = () => {
  const { name, item, section, show, system } = useSelector(state => state.specCreateProduct.stepOne);
  const { collection: sections } = useSelector(state => state.specProductsSections);
  const { collection: items } = useSelector(state => state.specProductsItems);
  const { systemsCollection: systems } = useSelector(state => state.specCreateProduct);
  const dispatch = useDispatch();
  const { onChange: handleNameChange, set: setNameValue, value: nameValue } = useInput(name);
  const { onChange: onSectionChange, set: setSectionValue, value: sectionValue } = useSelect(section);
  const { onChange: onItemChange, set: setItemValue, value: itemValue } = useSelect(item);
  const { onChange: handleSystemChange, set: setSystemValue, value: systemValue } = useSelect(system);
  const handleSectionChange = option => {
    onSectionChange(option);
    setItemValue({});
    setSystemValue({});
    dispatch(onGetSpecProductsItems({ sectionID: option.value }));
  };
  const handleItemChange = option => {
    onItemChange(option);
    setSystemValue({});
    dispatch(onGetSpecProductsSystems({ itemID: option.value }));
  };
  const handleClose = () => dispatch(onHideSpecCreateProduct());
  const handleExiting = () => {
    setNameValue('');
    setSectionValue({});
    setItemValue({});
    setSystemValue({});
  };
  const handleNext = () => dispatch(onShowSpecCreateProductStepTwoSuccess({
    name: nameValue,
    section: sectionValue,
    item: itemValue,
    system: systemValue,
  }));
  const disabledNext = !nameValue || !sectionValue.label || !itemValue.label;

  useEffect(() => {
    if (!show) {
      return;
    }

    dispatch(onGetSpecProductsSections());
  }, [show]);

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Root>
        <Header>
          <Title>Crear producto</Title>
          <CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
        </Header>
        <Body>
          <Section>
            <StepsBubbles prefix="step-1" steps={[{ active: true }, { active: false }, { active: false }]} />
          </Section>
          <Section padding="41px 0 0">
            <Input 
              label="Nombre del producto"
              placeholder="Nombre"
              value={nameValue}
              width="490px"
              onChange={handleNameChange}
            />
          </Section>
          <Section alignItems="flex-end" display="grid" gridTemplateColumns="1fr 1fr 1fr" padding="36px 0 0">
            <Select
              label="Categoriza el producto"
              options={sections.map(sectionOption => ({ label: sectionOption.name, value: sectionOption.id }))}
              placeholder="Elige una sección"
              value={sectionValue}
              onChange={handleSectionChange}
            />
            <Select
              disabled={!sectionValue.value}
              options={items.map(itemOption => ({ label: itemOption.name, value: itemOption.id }))}
              placeholder="Elige una partida"
              value={itemValue}
              onChange={handleItemChange}
            />
            <Select
              disabled={!itemValue.value}
              options={systems.map(systemOption => ({ label: systemOption.name, value: systemOption.id }))}
              placeholder="Elige un sistema"
              value={systemValue}
              onChange={handleSystemChange}
            />
          </Section>
        </Body>
        <Footer>
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

export default SpecCreateProductStepOne;
