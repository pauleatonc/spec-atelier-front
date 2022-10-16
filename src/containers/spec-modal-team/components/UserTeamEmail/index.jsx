import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IconUser from '../../../../components/IconUser';
import SelectorRelative from '../../../../components/basics/SelectorRelative';
import dropArrowSource from '../../../../assets/images/icons/primary-arrow-down.svg';
import { PermissionLabel, IconArrowDown } from '../../styles';
import { OPTIONS_PERMISSIONS, STATUS_INVITATIONS } from '../../constants';
import { onUpdatePermission } from '../../actions';
import { Container, ContainerMail, Email, WaitingDisclaimer } from './styles';

const UserTeamEmail = ({ member, onClick }) => {
  const { user_owner: userOwner } = useSelector(
    (state) => state.specDocument.project,
  );
  const { id: specID } = useParams();
  const dispatch = useDispatch();
  const { user, permission: memberPermission, status } = member;
  const waiting = status === STATUS_INVITATIONS.WAITING;

  const [permission, setPermission] = useState(
    OPTIONS_PERMISSIONS.find(
      (option) => option.value === memberPermission.ability,
    ),
  );

  const updatePermission = (value) => {
    const items = [];
    memberPermission.sections.forEach((section) => {
      section.items.forEach((item) => items.push(item.id));
    });
    const invitation = {
      email: user.email,
      ability: value.value,
      all: memberPermission.all,
      sections: memberPermission.sections.map((section) => section.id),
      items,
    };
    if (memberPermission.ability !== value.value)
      dispatch(
        onUpdatePermission(
          specID,
          memberPermission?.id,
          memberPermission?.type,
          invitation,
          () => setPermission(value),
        ),
      );
  };

  return (
    <Container>
      <ContainerMail owner={userOwner} onClick={() => onClick(member)}>
        <IconUser user={user} waiting={waiting} />
        <Email owner={userOwner}>{user.email}</Email>
        {waiting && (
          <WaitingDisclaimer>
            (no ha aceptado aún la invitación a colaborar)
          </WaitingDisclaimer>
        )}
      </ContainerMail>
      {userOwner && (
        <div>
          <SelectorRelative
            name="sort"
            right
            hoverPrimaryColor
            showIconInfo
            maxHeight="180px"
            options={OPTIONS_PERMISSIONS}
            value={permission.id}
            onChange={updatePermission}
            position="top"
            renderInput={
              <>
                <PermissionLabel>{permission.label}</PermissionLabel>
                <IconArrowDown alt="icon arrow down" src={dropArrowSource} />
              </>
            }
          />
        </div>
      )}
    </Container>
  );
};

export default UserTeamEmail;
