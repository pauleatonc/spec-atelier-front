import React, { useState } from 'react';

import IconUser from '../../../../components/IconUser';
import SelectorRelative from '../../../../components/basics/SelectorRelative';
import dropArrowSource from '../../../../assets/images/icons/primary-arrow-down.svg';

import { PermisionLabel, IconArrowDown } from '../../styles';
import { OPTIONS_PERMISION } from '../../constants';

import { Container, ContainerMail, Email } from './styles';

const UserTeamMail = ({ member, onClick }) => {
	const { user, permission } = member;
	const [permision, setPermision] = useState(
		permission.ability === 'write'
			? OPTIONS_PERMISION[0]
			: OPTIONS_PERMISION[1],
	);
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
					maxHeight="180px"
					options={OPTIONS_PERMISION}
					placeholder="HOLA"
					value={permision.id}
					onChange={setPermision}
					renderInput={
						<>
							<PermisionLabel>{permision.label}</PermisionLabel>
							<IconArrowDown alt="" src={dropArrowSource} />
						</>
					}
				/>
			</div>
		</Container>
	);
};

export default UserTeamMail;
