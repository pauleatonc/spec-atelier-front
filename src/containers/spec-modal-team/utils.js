export const getCheckListData = (sections, permission) => ({
  label: 'root',
  value: 'root',
  isSelected: permission ? permission?.all : false,
  children: sections.map((section) => ({
    label: section.name,
    value: section.id,
    users: section.users,
    isSelected: permission?.sections.length
      ? permission.sections.some((sec) => sec.id === section.id)
      : false,
    children: section.children.map((item) => ({
      label: item.name,
      value: item.id,
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
