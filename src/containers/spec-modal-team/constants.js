export const TYPE_MODALS = {
	NEW_MEMBER_MODAL: 'newMemberModal',
	TEAM_MODAL: 'teamModal',
	DETAIL_MEMBER_MODAL: 'detailMemberModal',
};

export const OPTIONS_PERMISSIONS = [
	{
		id: 'write',
		label: 'Editar ET',
		value: 'write',
		tooltip: 'El usuario puede ver y editar las secciónes compartidas.',
	},
	{
		id: 'watch',
		label: 'Ver ET',
		value: 'watch',
		tooltip:
			'El usuario puede ver las secciónes compartidas pero no editarlas.',
	},
];

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const STATUS_INVITATIONS = {
	ACCEPTED: 'aceptada',
	REJECTED: 'rechazada',
	WAITING: 'esperando',
};

export const PERMISSIONS_TYPE = {
	INVITATION: 'ProjectInvitation',
	PERMISSION: 'ProjectPermission',
};
