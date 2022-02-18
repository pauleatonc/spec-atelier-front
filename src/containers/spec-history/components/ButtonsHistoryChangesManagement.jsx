import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeOptionHistory } from '../SpecHistory.actions';
import { SPEC_CHANGE_MANAGEMENT, SPEC_HISTORY_TABLE } from '../../../config/constants/button-variants';
import { HistoryChangeManagementContent, Item, ItemText, Separator, UnderLine } from '../SpecHistory.styles';

const ButtonsHistoryChangesManagement = () => {
  const { option_changes_management } = useSelector(state => state.specHistory);
  const dispatch = useDispatch();
  const handleShowTable = option => () => dispatch(changeOptionHistory(option));

  return (
    <HistoryChangeManagementContent>
      <Item active={option_changes_management === SPEC_CHANGE_MANAGEMENT} onClick={handleShowTable(SPEC_CHANGE_MANAGEMENT)}>
        <ItemText>Gestión de Cambios</ItemText>
        <UnderLine active={option_changes_management === SPEC_CHANGE_MANAGEMENT} />
      </Item>
      <Separator />
      <Item active={option_changes_management === SPEC_HISTORY_TABLE} onClick={handleShowTable(SPEC_HISTORY_TABLE)}>
        <ItemText>Historial</ItemText>
        <UnderLine active={option_changes_management === SPEC_HISTORY_TABLE} />
      </Item>
    </HistoryChangeManagementContent>
  );
};

export default ButtonsHistoryChangesManagement;
