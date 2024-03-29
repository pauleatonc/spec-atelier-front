import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptionHistory } from '../SpecHistory.actions';
import {
  SPEC_CHANGE_MANAGEMENT,
  SPEC_HISTORY_TABLE,
} from '../../../config/constants/button-variants';
import {
  HistoryChangeManagementContent,
  Item,
  ItemText,
  Separator,
} from '../SpecHistory.styles';

const ButtonsHistoryChangesManagement = ({ showHistory }) => {
  const { option_changes_management } = useSelector(
    (state) => state.specHistory,
  );
  const {
    project: { user_owner },
  } = useSelector((state) => state.specDocument);
  const dispatch = useDispatch();
  const handleShowTable = (option) => () =>
    dispatch(changeOptionHistory(option));

  return (
    <HistoryChangeManagementContent>
      {user_owner && (
        <>
          <Item
            active={option_changes_management === SPEC_CHANGE_MANAGEMENT}
            onClick={handleShowTable(SPEC_CHANGE_MANAGEMENT)}
          >
            <ItemText
              active={option_changes_management === SPEC_CHANGE_MANAGEMENT}
            >
              Gestión de cambios
            </ItemText>
          </Item>
          {showHistory && <Separator />}
        </>
      )}
      {showHistory && (
        <Item
          active={option_changes_management === SPEC_HISTORY_TABLE}
          onClick={handleShowTable(SPEC_HISTORY_TABLE)}
        >
          <ItemText active={option_changes_management === SPEC_HISTORY_TABLE}>
            {' '}
            Historial
          </ItemText>
        </Item>
      )}
    </HistoryChangeManagementContent>
  );
};

export default ButtonsHistoryChangesManagement;
