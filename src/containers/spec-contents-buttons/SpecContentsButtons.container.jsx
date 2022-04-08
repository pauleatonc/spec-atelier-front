import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOption } from './SpecContentsButtons.actions';
import { AddIcon, ContentButton } from './SpecContentsButtons.styles';
import {
  SPEC_DOCUMENT,
  SPEC_TABLE,
  SPEC_HISTORY,
} from '../../config/constants/button-variants';
import {
  CHANGE_HISTORY_SELECTED,
  CHANGE_HISTORY_UNSELECTED,
  SPEC_ADD_SOURCE_W,
  SPEC_ADD_SOURCE_W_SELECTED,
  SPEC_PAGE_SOURCE,
  SPEC_PAGE_SOURCE_SELECTED,
} from '../../assets/Images';

const SpecContentButtons = () => {
  const dispatch = useDispatch();
  const { dataSection } = useSelector((state) => state);
  const { option } = dataSection;
  const handdleShowTable = (opt) => dispatch(changeOption(opt));

  return (
    <ContentButton isTypeTable={option === 'T'}>
      <AddIcon
        alt="Listar archivo"
        src={
          option === SPEC_DOCUMENT
            ? SPEC_PAGE_SOURCE_SELECTED
            : SPEC_PAGE_SOURCE
        }
        onClick={() => handdleShowTable(SPEC_DOCUMENT)}
      />
      <AddIcon
        alt="Listar tabla"
        src={
          option === SPEC_TABLE ? SPEC_ADD_SOURCE_W_SELECTED : SPEC_ADD_SOURCE_W
        }
        onClick={() => handdleShowTable(SPEC_TABLE)}
      />
      <AddIcon
        alt="Listar historial de cambios"
        src={
          option === SPEC_HISTORY
            ? CHANGE_HISTORY_SELECTED
            : CHANGE_HISTORY_UNSELECTED
        }
        onClick={() => handdleShowTable(SPEC_HISTORY)}
      />
    </ContentButton>
  );
};

export default SpecContentButtons;
