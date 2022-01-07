export const getCheckListData = (sections, permission) => ({
	label: 'root',
	value: 'root',
	isSelected: permission ? permission?.all : false,
	children: sections.map((section) => ({
		label: section.element.name,
		value: section.element.id,
		isSelected: permission?.sections.length
			? permission.sections.some((sec) => sec.id === section.element.id)
			: false,
		children: section.items.map((item) => ({
			label: item.element.name,
			value: item.element.id,
			isSelected: permission?.sections.length
				? permission.sections
						.find((sec) => sec.id === section.element.id)
						.items.some((itm) => itm.id === item.element.id)
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
		section.children.forEach(
			(item) => item.isSelected && selectedItems.push(item.value),
		);
	});
	return { isAllSelected, selectedSections, selectedItems };
};
