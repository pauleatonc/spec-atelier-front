import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SubHeaderProjectPermission } from 'components/sub-headers/ProjectSubHeaders';
import { createProject, changeView } from './ProjectCreate.actions';
import {
  ContentData,
  Title,
  Row,
  ButtonContainer,
  ButtonItem,
  Text,
  PermissionOptions,
  PermissionOption,
  PermissionTitle,
  PermissionDescription,
} from './ProjectCreate.styles';

const ProjectPermission = () => {
  const { view, newProject } = useSelector((state) => state.newProject);
  const [tempNewProject, setNewProject] = useState({ ...newProject });
  const dispatch = useDispatch();

  const onChangeProjectData = ({ name, value }) => () =>
    setNewProject({ ...tempNewProject, [name]: value });

  const onSave = () => dispatch(createProject(tempNewProject));
  const onBack = () => dispatch(changeView('details', tempNewProject));
  useEffect(() => setNewProject(newProject), [newProject]);

  if (view !== 'permission') {
    return <SubHeaderProjectPermission visibility={newProject.visibility} />;
  }

  return (
    <ContentData>
      <Title>Permisos del Proyecto</Title>
      <Text>Visibilidad</Text>
      <PermissionOptions>
        <PermissionOption
          onClick={onChangeProjectData({ name: 'visibility', value: 0 })}
          active={!tempNewProject.visibility}
        >
          <PermissionTitle>
            <i className="fas fa-lock" />
            &nbsp;&nbsp;Privado
          </PermissionTitle>
          <PermissionDescription>
            Solo tendrán acceso las personas que elegiste para que puedan ver o
            editar el proyecto.
          </PermissionDescription>
        </PermissionOption>
        <PermissionOption
          onClick={onChangeProjectData({ name: 'visibility', value: 1 })}
          active={tempNewProject.visibility}
        >
          <PermissionTitle>
            <i className="fas fa-globe-americas" />
            &nbsp;&nbsp;Público
          </PermissionTitle>
          <PermissionDescription>
            Cualquier persona puede ver y editar este proyecto.
          </PermissionDescription>
        </PermissionOption>
      </PermissionOptions>
      <Row>
        <ButtonContainer>
          <ButtonItem variant="gray" onClick={onBack}>
            Atrás
          </ButtonItem>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonItem variant="primary" onClick={onSave}>
            Guardar
          </ButtonItem>
        </ButtonContainer>
      </Row>
    </ContentData>
  );
};

export default ProjectPermission;
