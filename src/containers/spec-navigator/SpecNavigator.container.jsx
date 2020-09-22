import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onHideSpecProducts, onShowSpecProducts } from '../spec-products/SpecProducts.actions';
import { Root, Section, NavIcon } from './SpecNavigator.styles';
import docSource from '../../assets/images/icons/spec-doc.svg';
import docActiveSource from '../../assets/images/icons/spec-doc_active.svg';
import itemsSource from '../../assets/images/icons/spec-items.svg';
import itemsActiveSource from '../../assets/images/icons/spec-items_active.svg';
import cloneSource from '../../assets/images/icons/spec-clone.svg';
import cloneActiveSource from '../../assets/images/icons/spec-clone_active.svg';
import { onHideSpecContents, onShowSpecContents } from '../spec-contents/SpecContents.actions';

/**
 * The SpecNavigator's container.
 */
const SpecNavigator = () => {
  const { show: showProducts } = useSelector(state => state.specProducts);
  const { show: showContents } = useSelector(state => state.specContents);
  const dispatch = useDispatch();
  const handleProductsClick = () => {
    if (showProducts) {
      return dispatch(onHideSpecProducts());
    }

    return dispatch(onShowSpecProducts());
  };
  const handleContentsClick = () => {
    if (showContents) {
      return dispatch(onHideSpecContents());
    }

    return dispatch(onShowSpecContents());
  };

  return (
    <Root>
      <Section>
        <NavIcon src={showProducts ? docActiveSource : docSource} srcActive={docActiveSource} onClick={handleProductsClick} />
      </Section>
      <Section>
        <NavIcon src={showContents ? itemsActiveSource : itemsSource} srcActive={itemsActiveSource} onClick={handleContentsClick} />
      </Section>
      <Section>
      {/* <NavIcon src={cloneSource} srcActive={cloneActiveSource} /> */}
      </Section>
    </Root>
  );
};

export default SpecNavigator;
