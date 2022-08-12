const getUsersSection = (usersData, section, item) => {
  const users = [];
  let usr = {};
  usersData.forEach((user) => {
    user.permission.sections.forEach((userSection) => {
      if (item) {
        userSection.items.forEach((userItem) => {
          if (userItem.id === item.id) {
            usr = {
              ...user.user,
              status: user.status,
            };
            users.push(usr);
          }
        });
      } else if (userSection.id === section.id) {
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
    id: section.id,
    label: section.name,
    value: `${section.id}-${section.name}`,
    users: usersData ? getUsersSection(usersData, section) : section.users,
    isSelected: permission?.sections.length
      ? permission.sections.some((sec) => sec.id === section.id)
      : false,
    children: section.children.map((item) => ({
      id: item.id,
      label: item.name,
      value: `${item.id}-${item.name}`,
      users: usersData ? getUsersSection(usersData, section, item) : item.users,
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
