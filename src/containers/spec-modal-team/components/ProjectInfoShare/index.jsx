/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';

import NestedChecklist from './components/NestedCheckList';
import {
  Container,
  SelectAllProject,
  AllProjectLabel,
  IconCheck,
} from './styles';

const ProjectInfoShare = ({ withChecks, checklistData, setChecklistData }) => {
  const getFlattedChildren = (node) => {
    let flat = [node];
    node.children.forEach((child) => {
      flat = [...flat, ...getFlattedChildren(child)];
    });
    return flat;
  };

  const isAllSelected = (node) => {
    let allSelected = true;
    const flat = getFlattedChildren(node);
    flat.forEach((child) => {
      if (!child.isSelected) allSelected = false;
    });
    return allSelected;
  };

  const allSelected = isAllSelected(checklistData);

  const setAllChildren = (node, value) => {
    const flat = getFlattedChildren(node);
    flat.forEach((child) => {
      child.isSelected = value;
    });
  };

  const traverseAndToggleNodeChildren = (data, value) => {
    let toggled = false;
    data.forEach((node) => {
      if (node.value === value) {
        toggled = true;
        let newValue = true;
        if (isAllSelected(node)) newValue = false;
        node.isSelected = newValue;
        setAllChildren(node, newValue);
      }
    });

    if (!toggled) {
      for (let i = 0; i < data.length; i += 1) {
        const node = data[i];
        const {
          data: newChildren,
          toggled: toggledTwo,
        } = traverseAndToggleNodeChildren(node.children, value);
        node.children = newChildren;
        if (toggledTwo) break;
      }
    }

    return { data, toggled };
  };

  const toggleAllChildren = (value) => {
    setChecklistData((data) => {
      const { data: newChildren } = traverseAndToggleNodeChildren(
        data.children,
        value,
      );
      const newData = { ...data, children: newChildren };
      return newData;
    });
  };

  const toggleAllProject = () => {
    setChecklistData((data) => {
      const flat = getFlattedChildren(data);
      flat.forEach((node) => {
        node.isSelected = !allSelected;
      });
      return { ...data };
    });
  };

  useEffect(() => {
    const nodes = getFlattedChildren(checklistData);
    const selected = [];
    nodes.forEach((node) => {
      if (node.isSelected) selected.push(node.value);
    });
  }, [checklistData]);

  return (
    <Container>
      {withChecks && (
        <SelectAllProject onClick={toggleAllProject}>
          <IconCheck
            className={allSelected ? 'fas fa-check-square' : 'far fa-square'}
          />
          <AllProjectLabel>Todo el Proyecto</AllProjectLabel>
        </SelectAllProject>
      )}
      {!!checklistData.children.length && (
        <NestedChecklist
          withChecks={withChecks}
          data={checklistData.children}
          isAllSelected={isAllSelected}
          toggleAllChildren={toggleAllChildren}
        />
      )}
    </Container>
  );
};

export default ProjectInfoShare;
