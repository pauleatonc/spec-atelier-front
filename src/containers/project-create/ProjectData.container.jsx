import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'components/inputs/Input';
import { SubHeaderProjectData } from 'components/sub-headers/ProjectSubHeaders';
import { changeView, getProject } from './ProjectCreate.actions';
import {
  Title,
  ButtonIcon,
  Row,
  ButtonContainer,
  ButtonItem,
  ContentData,
  IconCheck,
  TextButton,
} from './ProjectCreate.styles';

const ProjectData = () => {
  const { view, newProject } = useSelector((state) => state.newProject);
  const { work_types, project_types } = useSelector((state) => state.app);
  const [tempNewProject, setNewProject] = useState(newProject);
  const dispatch = useDispatch();
  const { id } = useParams();

  const onChangeProjectData = ({ name, value }) => () => {
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onChangeName = ({ target: { name, value } }) =>
    setNewProject({ ...tempNewProject, [name]: value });

  const onSave = () => dispatch(changeView('details', tempNewProject));

  const canSave =
    tempNewProject.work_type.id &&
    tempNewProject.project_type.id &&
    tempNewProject.name;

  useEffect(() => setNewProject(newProject), [newProject]);

  useEffect(() => {
    if (id && work_types.length) dispatch(getProject({ id }));
  }, []);

  useEffect(() => {
    if (work_types.length) dispatch(getProject({ id }));
  }, [work_types]);

  if (view !== 'data') {
    return <SubHeaderProjectData {...newProject} />;
  }

  return (
    <ContentData>
      <Title>¿Cómo se llama el proyecto?</Title>
      <Input
        name="name"
        value={tempNewProject.name}
        placeholder="Nombre"
        onChange={onChangeName}
      />
      <br />
      <Title>¿Qué tipo de proyecto es?</Title>
      <Row>
        {project_types.map((pt) => (
          <ButtonContainer key={pt.id}>
            <IconCheck show={pt.id === tempNewProject.project_type.id} />
            <ButtonItem
              onClick={onChangeProjectData({ name: 'project_type', value: pt })}
              variant={
                pt.id === tempNewProject.project_type.id ? 'primary' : 'default'
              }
              inverse
            >
              <ButtonIcon
                type={pt?.value.toUpperCase()}
                active={pt.id === tempNewProject.project_type.id}
              />
              <TextButton>{pt.name}</TextButton>
            </ButtonItem>
          </ButtonContainer>
        ))}
      </Row>
      <Title>¿Qué tipo de trabajo es?</Title>
      <Row>
        {work_types.map((wt) => (
          <ButtonContainer key={wt.id}>
            <IconCheck show={wt.id === tempNewProject.work_type.id} />
            <ButtonItem
              onClick={onChangeProjectData({ name: 'work_type', value: wt })}
              variant={
                wt.id === tempNewProject.work_type.id ? 'primary' : 'default'
              }
              inverse
            >
              <TextButton>{wt.name}</TextButton>
            </ButtonItem>
          </ButtonContainer>
        ))}
      </Row>
      <Row>
        <ButtonContainer>
          <ButtonItem
            variant={canSave ? 'primary' : 'gray'}
            onClick={onSave}
            disabled={!canSave}
          >
            <TextButton>Siguiente</TextButton>
          </ButtonItem>
        </ButtonContainer>
      </Row>
    </ContentData>
  );
};

export default ProjectData;
