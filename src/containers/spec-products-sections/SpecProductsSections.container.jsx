import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { onGetProductsSections } from './SpecProductsSections.actions';
import { onShowSpecProductsItemsSuccess } from '../spec-products-items/SpecProductsItems.actions';
import useSpecPanelsLayout from '../../components/layouts/SpecPanelsLayout.hook';
import SearchBar from '../../components/filters/SearchBar';
import { Root, Header, Body, Item, ItemIcon, ItemText } from './SpecProductsSections.styles';

const TRANSITION_DURATION = 150;
const defaultStyle = {
  opacity: '0',
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
};
const transitionStyles = {
  exited: { opacity: '0.1' },
  entered: { opacity: '1' },
};

/**
 * The SpecProductsSections' container.
 */
const SpecProductsSections = () => {
  const { collection: sections, show } = useSelector(state => state.specProductsSections);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSearchChange = event => setSearch(event.target.value);
  const handleSectionClick = sectionID => () => dispatch(onShowSpecProductsItemsSuccess({ sectionID }));
  
  useEffect(() => {
    if (!show) {
      return;
    }

    dispatch(onGetProductsSections());
  }, [show]);
  useSpecPanelsLayout(show);

  return (
    <Transition in={show} timeout={TRANSITION_DURATION}>
      {state => (
        <Root style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <Header>
            <SearchBar placeholder="Buscar" value={search} onChange={handleSearchChange} />
          </Header>
          <Body>
            {sections.map(section => (
              <Item key={section.id} onClick={handleSectionClick(section.id)}>
                <ItemIcon icon={section.eng_name} iconHover={`${section.eng_name}_active`} />
                <ItemText>{section.name}</ItemText>
              </Item>
            ))}
          </Body>
        </Root>
      )}
    </Transition>
  )
};

export default SpecProductsSections;
