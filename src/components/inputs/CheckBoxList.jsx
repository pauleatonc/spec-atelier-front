import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '../tooltip/Tooltip';
import { getTeamUser } from '../../containers/spec-document/utils';
import { Option, OptionCheckboxIcon, OptionText } from './CheckBoxList.styles';
import { CHECKBOX_OFF_SOURCE, CHECKBOX_ON_SOURCE } from '../../assets/Images';

const CheckBoxList = ({ options, onItemClick, values }) => {
  const { team, user_owner: userOwner } = useSelector(
    (state) => state.specDocument.project,
  );
  const { user } = useSelector((state) => state.auth);
  const [teamUser, setTeamUser] = useState('');

  useEffect(() => {
    setTeamUser(getTeamUser(team, user));
  }, [team]);

  const canEdit = userOwner || teamUser?.permission?.ability === 'write';

  const handleOnClick = (key) => {
    if (canEdit) onItemClick(key);
  };

  return (
    <>
      {options.map(({ key, text }) => {
        return (
          <Option key={key} onClick={() => handleOnClick(key)}>
            {canEdit && (
              <OptionCheckboxIcon
                src={values[key] ? CHECKBOX_ON_SOURCE : CHECKBOX_OFF_SOURCE}
              />
            )}
            {canEdit ? (
              <OptionText>{text}</OptionText>
            ) : (
              <Tooltip key={key} content="No puedes editar" position="right">
                <OptionText>{text}</OptionText>
              </Tooltip>
            )}
          </Option>
        );
      })}
    </>
  );
};

export default CheckBoxList;
