import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import IconUser from '../../../../components/IconUser';
import SelectorRelative from '../../../../components/basics/SelectorRelative';
import dropArrowSource from '../../../../assets/images/icons/primary-arrow-down.svg';

import { PermisionLabel, IconArrowDown } from '../../styles';
import { OPTIONS_PERMISSIONS, STATUS_INVITATIONS } from '../../constants';
import { onUpdatePermission } from '../../actions';

import { Container, ContainerMail, Email, WaitingDisclaimer } from './styles';

const UserTeamMail = ({ member, onClick }) => {
	const { id: specID } = useParams();
	const dispatch = useDispatch();
	const { user, permission: memberPermission, status } = member;
	const isAwaiting = status === STATUS_INVITATIONS.WAITING;
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
			<ContainerMail onClick={() => onClick(member)}>
				<IconUser user={user} isAwaiting={isAwaiting} />
				<Email>{user.email}</Email>
				{isAwaiting && (
					<WaitingDisclaimer>
						(no ha aceptado aún la invitación a colaborar.)
					</WaitingDisclaimer>
				)}
			</ContainerMail>
			<div>
				<SelectorRelative
					name="sort"
					hoverPrimaryColor
					showIconInfo
					maxHeight="180px"
					options={OPTIONS_PERMISSIONS}
					placeholder="HOLA"
					value={permission.id}
					onChange={updatePermission}
					renderInput={
						<>
							<PermisionLabel>{permission.label}</PermisionLabel>
							<IconArrowDown alt="" src={dropArrowSource} />
						</>
					}
				/>
			</div>
		</Container>
	);
};

export default UserTeamMail;
