const getUsersSection = (usersData, section, item) => {
	const users = [];
	let usr = {};
	usersData.forEach((user) => {
		user.permission.sections.forEach((userSection) => {
			if (item) {
				userSection.items.forEach((userItem) => {
					if (userItem.id === item.element.id) {
						usr = {
							...user.user,
							status: user.status,
						};
						users.push(usr);
					}
				});
			} else if (userSection.id === section.element.id) {
				usr = {
					...user.user,
					status: user.status,
				};
				users.push(usr);
			}
		});
	});
	return users;
};

export const getCheckListData = (sections, permission, usersData) => ({
	label: 'root',
	value: 'root',
	isSelected: permission ? permission?.all : false,
	children: sections.map((section) => ({
		label: section.element.name,
		value: section.element.id,
		users: usersData ? getUsersSection(usersData, section) : [],
		isSelected: permission?.sections.length
			? permission.sections.some((sec) => sec.id === section.element.id)
			: false,
		children: section.items.map((item) => ({
			label: item.element.name,
			value: item.element.id,
			users: usersData ? getUsersSection(usersData, section, item) : [],
			isSelected: permission?.sections.length
				? permission.sections
						.find((sec) => sec.id === section.element.id)
						?.items.some((itm) => itm.id === item.element.id)
				: false,
			children: [],
		})),
	})),
});

export const getDataForService = (data) => {
	const isAllSelected = data?.isSelected;
	const selectedSections = [];
	const selectedItems = [];
	data.children.forEach(
		(section) => section.isSelected && selectedSections.push(section.value),
	);
	data.children.forEach((section) => {
		const isSelectedSection = selectedSections.find(
			(sec) => sec === section.value,
		);
		section.children.forEach((item) => {
			if (item.isSelected) {
				selectedItems.push(item.value);
				if (!isSelectedSection) selectedSections.push(section.value);
			}
		});
	});
	return { isAllSelected, selectedSections, selectedItems };
};
