export const getCheckListData = (sections, permission) => ({
  label: 'root',
  value: 'root',
  isSelected: permission ? permission?.all : false,
  children: sections.map((section) => ({
    id: section.id,
    label: section.name,
    value: `${section.id}-${section.name}`,
    users: section.users,
    isSelected: permission?.sections.length
      ? permission.sections.some((sec) => sec.id === section.id)
      : false,
    children: section.children.map((item) => ({
      id: item.id,
      label: item.name,
      value: `${item.id}-${item.name}`,
      users: item.users,
      isSelected: permission?.sections.length
        ? permission.sections
            .find((sec) => sec.id === section.id)
            ?.items.some((itm) => itm.id === item.id)
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
    (section) => section.isSelected && selectedSections.push(section.id),
  );
  data.children.forEach((section) => {
    const isSelectedSection = selectedSections.find(
      (sec) => sec === section.id,
    );
    section.children.forEach((item) => {
      if (item.isSelected) {
        selectedItems.push(item.id);
        if (!isSelectedSection) selectedSections.push(section.id);
      }
    });
  });
  return { isAllSelected, selectedSections, selectedItems };
};
