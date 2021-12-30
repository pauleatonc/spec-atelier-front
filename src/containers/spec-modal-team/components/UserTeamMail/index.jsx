import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import IconUser from '../../../../components/IconUser';
import SelectorRelative from '../../../../components/basics/SelectorRelative';
import dropArrowSource from '../../../../assets/images/icons/primary-arrow-down.svg';

import { PermisionLabel, IconArrowDown } from '../../styles';
import { OPTIONS_PERMISSIONS } from '../../constants';
import { onUpdatePermission } from '../../actions';

import { Container, ContainerMail, Email } from './styles';

const UserTeamMail = ({ member, onClick }) => {
	const { id: specID } = useParams();
	const dispatch = useDispatch();
	const { user, permission: memberPermission } = member;
	const [permission, setPermission] = useState(
		OPTIONS_PERMISSIONS.find(
			(option) => option.value === memberPermission.ability,
		),
	);
	const updatePermission = (value) => {
		const invitation = {
			email: user.email,
			ability: value.value,
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
				<IconUser user={user} />
				<Email>{user.email}</Email>
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
