import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onHideSpecSectionsListSuccess, onShowSpecSectionsListSuccess } from '../spec-sections-list/SpecSectionsList.actions';
import { Root, Section, NavIcon } from './SpecNavigator.styles';
import docSource from '../../assets/images/icons/spec-doc.svg';
import docActiveSource from '../../assets/images/icons/spec-doc_active.svg';
import itemsSource from '../../assets/images/icons/spec-items.svg';
import itemsActiveSource from '../../assets/images/icons/spec-items_active.svg';
import cloneSource from '../../assets/images/icons/spec-clone.svg';
import cloneActiveSource from '../../assets/images/icons/spec-clone_active.svg';

/**
 * The SpecNavigator's container.
 */
const SpecNavigator = () => {
  const { show: showSections } = useSelector(state => state.specSectionsList);
  const dispatch = useDispatch();
  const handleSectionsClick = () => {
    if (showSections) {
      dispatch(onHideSpecSectionsListSuccess());

      return;
    }

    dispatch(onShowSpecSectionsListSuccess());
  };

  return (
    <Root>
      <Section>
        <NavIcon src={showSections ? docActiveSource : docSource} srcActive={docActiveSource} onClick={handleSectionsClick} />
      </Section>
      <Section>
        <NavIcon src={itemsSource} srcActive={itemsActiveSource} />
      </Section>
      <Section>
        <NavIcon src={cloneSource} srcActive={cloneActiveSource} />
      </Section>
    </Root>
  );
};

export default SpecNavigator;
