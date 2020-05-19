import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeView } from './ProjectCreate.actions';
import {
  Input,
} from '../../components/SpecComponents';
import {
  Title,
  ButtonIcon,
  SubHeader,
  Row,
  ButtonContainer,
  Button,
  ContentData,
  IconCheck,
} from './ProjectCreate.styles';

const ProjectData = () => {
  const { newProject } = useSelector(state => state.newProject);
  const { work_types, project_types } = useSelector(state => state.app);
  const [tempNewProject, setNewProject] = useState(newProject);
  const dispatch = useDispatch();

  const onChangeProjectData = ({ name, value }) => () => {
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onChangeName = ({ target: { name, value } }) => setNewProject({ ...tempNewProject, [name]: value });

  const onSave = () => dispatch(changeView('details', tempNewProject));

  const canSave = tempNewProject.work_type.id && tempNewProject.project_type.id && tempNewProject.name;

  return (
    <>
      <ContentData>
        <Title>
          ¿Cómo se llama el proyecto?
        </Title>
        <Input
          name="name"
          value={tempNewProject.name}
          placeholder="Nombre"
          onChange={onChangeName}
        />
        <br />
        <Title>
          ¿Qué tipo de proyecto es?
        </Title>
        <Row>
          {project_types.map(pt => (
            <ButtonContainer key={pt.id}>
              <IconCheck show={pt.id === tempNewProject.project_type.id} />
              <Button
                onClick={onChangeProjectData({ name: 'project_type', value: pt })}
                variant={pt.id === tempNewProject.project_type.id ? 'primary' : 'default'}
                inverse
              >
                <ButtonIcon type={pt?.value.toUpperCase()} active={pt.id === tempNewProject.project_type.id} />
                {pt.translation_spa}
              </Button>
            </ButtonContainer>
          ))}
        </Row>
        <Title>
          ¿Qué tipo de trabajo es?
        </Title>
        <Row>
          {work_types.map(wt => (
            <ButtonContainer key={wt.id}>
              <IconCheck show={wt.id === tempNewProject.work_type.id} />
              <Button
                onClick={onChangeProjectData({ name: 'work_type', value: wt })}
                variant={wt.id === tempNewProject.work_type.id ? 'primary' : 'default'}
                inverse
              >
                {wt.translation_spa}
              </Button>
            </ButtonContainer>
          ))}
        </Row>
        <Row>
          <ButtonContainer>
            <Button
              variant={canSave ? 'primary' : 'gray'}
              onClick={onSave}
              disabled={!canSave}
            >
              Guardar
            </Button>
          </ButtonContainer>
        </Row>
      </ContentData>
      <SubHeader>
        <Title>
          Detalle del proyecto
        </Title>
      </SubHeader>
      <SubHeader>
        <Title>
          Permisos
        </Title>
      </SubHeader>
    </>
  );
};

export default ProjectData;