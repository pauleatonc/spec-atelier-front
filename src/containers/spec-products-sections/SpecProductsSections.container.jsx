import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSpecProductsBySection } from '../spec-products/SpecProducts.actions';
import useSpecProductsPanelLayout from '../../components/layouts/SpecProductsPanelLayout.hook';
import Breadcrumbs from '../../components/basics/Breadcrumbs';
import { Root, Body, Header, Item, ItemIcon, ItemText, Loading } from './SpecProductsSections.styles';

/**
 * The SpecProductsSections' container.
 */
const SpecProductsSections = () => {
  const { section: selectedSectionID } = useSelector(state => state.specProducts.filters);
  const { collection: sections, show } = useSelector(state => state.specProductsSections);
  const dispatch = useDispatch();
  const handleSectionClick = sectionID => () => dispatch(onGetSpecProductsBySection({ sectionID }));

  useSpecProductsPanelLayout(show);

  return (
    <Root>
      <Header>
        <Breadcrumbs items={[{ label: 'Secciones' }]} />
      </Header>
      {sections.length === 0 && <Loading>Cargando...</Loading>}
      {sections.length > 0 && (
        <Body>
          {sections.map(section => (
            <Item key={section.id} onClick={handleSectionClick(section.id)}>
              <ItemIcon active={section.id === selectedSectionID} icon={section.eng_name} iconHover={`${section.eng_name}_active`} />
              <ItemText active={section.id === selectedSectionID}>{section.code}. {section.name}</ItemText>
            </Item>
          ))}
        </Body>
      )}
    </Root>
  )
};

export default SpecProductsSections;
