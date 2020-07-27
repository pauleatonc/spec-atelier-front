import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { onHideSpecEditProduct, onGetSpecProductsSystems, onGetSpecProductsBrands } from './SpecEditProduct.actions';
import { onGetSpecProductsSections } from '../spec-products-sections/SpecProductsSections.actions';
import { onGetSpecProductsItems } from '../spec-products-items/SpecProductsItems.actions';
import { useInput, useSelect, useTextarea } from '../../components/inputs/Inputs.hooks';
import useModal from '../../components/layouts/ModalLayout.hooks';
import ModalLayout from '../../components/layouts/ModalLayout';
import { Root, Section, Footer, Label, ProductContainer } from './SpecEditProduct.styles';
import { TextArea, Input, Select, Button, Loading } from '../../components/SpecComponents';
import { mapToSelector } from '../../helpers/helpers';

/**
 * The SpecEditProduct's container.
 */
const SpecEditProduct = () => {
  const { id } = useParams();
  console.log('id', id);
  const { show, product, loading } = useSelector(state => state.specEditProduct);
  const { collection: sections } = useSelector(state => state.specProductsSections);
  const { collection: items } = useSelector(state => state.specProductsItems);
  const { systemsCollection: systems, brandsCollection: brands } = useSelector(state => state.specEditProduct);
  const {
    project_types: projectTypes = [],
    room_types: roomTypes = [],
    work_types: workTypes = [],
  } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const { onChange: handleNameChange, set: setNameValue, value: nameValue } = useInput('');
  const { onChange: handlePriceChange, set: setPriceValue, value: priceValue } = useInput(0, 'currency');
  const { onChange: handleDescriptionChange, set: setDescriptionValue, value: descriptionValue } = useTextarea(product.description);
  const { onChange: onSectionChange, set: setSectionValue, value: sectionValue } = useSelect(product.section);
  const { onChange: onItemChange, set: setItemValue, value: itemValue } = useSelect(product.item);
  const { onChange: handleSystemChange, set: setSystemValue, value: systemValue } = useSelect(product.system);

  const { onChange: handleBrandChange, set: setBrandValue, value: brandValue } = useSelect(product.system);
  const { onChange: handleProjectTypeChange, set: setProjectTypeValue, value: projectTypeValue } = useSelect(product.system);
  const { onChange: handleRoomTypeChange, set: setRoomTypeValue, value: roomTypeValue } = useSelect(product.system);
  const { onChange: handleWorkTypeChange, set: setWorkTypeValue, value: workTypeValue } = useSelect(product.system);

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
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideSpecEditProduct()),
    exitingCallback: () => {
      setDescriptionValue('');
      setNameValue('');
      setSectionValue({});
      setItemValue({});
      setSystemValue({});
      setPriceValue('');
    },
  });
  // const handleNext = () => dispatch(onShowSpecEditProductStepTwoSuccess({
  //   name: nameValue,
  //   section: sectionValue,
  //   item: itemValue,
  //   system: systemValue,
  // }));

  const handleNext = () => { };

  const canEdit = !nameValue || !sectionValue.label || !itemValue.label;

  useEffect(() => {
    if (!show) {
      return;
    }
    // dispatch(getProduct());
    dispatch(onGetSpecProductsBrands());
    dispatch(onGetSpecProductsSections());
  }, [show]);

  useEffect(() => {
    console.log('product', product);
    if (product.id) {
      setDescriptionValue(product.long_desc);
      setNameValue(product.name);
      setSectionValue(mapToSelector(product.section));
      setItemValue(mapToSelector(product.item));
      setSystemValue(mapToSelector(product.system));
      setPriceValue(product.price);
      setBrandValue(mapToSelector(product.brand));
      // setRoomTypeValue(product.room_types)
    };
  }, [product]);
  if (loading || !brands || !product.id) return <Loading />
  return ( 
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Root>
        <Section padding="0 0 20px 0" width="50%">
          <Label>Nombre del producto</Label>
          <Input
            placeholder="Nombre"
            value={nameValue}
            width="490px"
            onChange={handleNameChange}
            name="nombre"
          />
        </Section>
        <ProductContainer>
          {/* Left */}
          <div>
            <Section display="grid" gridTemplateColumns="1fr 1fr 1fr" justifyItems="center" padding="4px 0">
              <img src="https://picsum.photos/200" />
              <img src="https://picsum.photos/200" />
              <img src="https://picsum.photos/200" />
            </Section>
            <Section display="grid" gridTemplateColumns="1fr 1fr" justifyItems="center" padding="4px 0">
              <img src="https://picsum.photos/200" />
              <img src="https://picsum.photos/200" />
            </Section>
          </div>
          {/* Right */}
          <div>
            <Section padding="0 0 12px">
              <Label>Descripción</Label>
              <TextArea
                minHeight="118px"
                placeholder="Detalla el producto"
                value={descriptionValue}
                onChange={handleDescriptionChange}
              />
            </Section>
            <Section alignItems="flex-end" display="grid" gridTemplateColumns="1fr 1fr" padding="20px 0">
              <div>
                <Label>Sección</Label>
                <Select
                  options={sections.map(mapToSelector)}
                  placeholder="Elige una sección"
                  value={sectionValue}
                  onChange={handleSectionChange}
                />
              </div>
              <div>
                <Label>Partida</Label>
                <Select
                  disabled={!sectionValue.value}
                  options={items.map(mapToSelector)}
                  placeholder="Elige una partida"
                  value={itemValue}
                  onChange={handleItemChange}
                />
              </div>
              <div>
                <Label>Sistema</Label>
                <Select
                  disabled={!itemValue.value}
                  options={systems.map(mapToSelector)}
                  placeholder="Elige un sistema"
                  value={systemValue}
                  onChange={handleSystemChange}
                />
              </div>
            </Section>
            <Section display="grid" gridTemplateColumns="1fr 1fr" padding="12px 0">
              <div>
                <Label>Marcas</Label>
                <Select
                  options={brands.map(mapToSelector)}
                  placeholder="Elige un sistema"
                  value={brandValue}
                  onChange={handleBrandChange}
                />
              </div>
              <div>
                <Label>Precio</Label>
                <Input
                  placeholder="Nombre"
                  value={priceValue}
                  width="100%"
                  onChange={handlePriceChange}
                  name="nombre"
                />
              </div>
            </Section>
            <Section alignItems="flex-end" display="grid" gridTemplateColumns="1fr 1fr" gridGap="12px">
              <div>
                <Label>Tipo de proyecto</Label>
                {projectTypes.length && (
                  <Select
                    options={projectTypes.map(mapToSelector)}
                    placeholder="Elige un tipo de proyecto"
                    value={projectTypeValue}
                    onChange={handleProjectTypeChange}
                  />
                )}
              </div>
              <div>
                <Label>Tipo de Obra</Label>
                {workTypes.length && (
                  <Select
                    options={workTypes.map(mapToSelector)}
                    placeholder="Elige un tipo"
                    value={workTypeValue}
                    onChange={handleWorkTypeChange}
                  />
                )}
              </div>
              <div>
                <Label>Tipo de habitación</Label>
                {roomTypes.length && (
                  <Select
                    options={roomTypes.map(mapToSelector)}
                    placeholder="Elige un sistema"
                    value={roomTypeValue}
                    onChange={handleRoomTypeChange}
                  />
                )}
              </div>
            </Section>
          </div>
        </ProductContainer>
        <Footer>
          <div>
            <Button
              disabled={canEdit}
              variant="primary"
              onClick={handleNext}
            >
              Guardar
            </Button>
            <Button
              inverse
              disabled={canEdit}
              variant="gray"
              onClick={handleNext}
            >
              Descartar
          </Button>
          </div>
          <Button
            inverse
            disabled={canEdit}
            variant="primary"
            onClick={handleNext}
          >
            Añadir datos adicionales
          </Button>
        </Footer>
      </Root>
    </ModalLayout>
  );
};

export default SpecEditProduct;
