import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeView } from './ProjectCreate.actions';
import {
  Input,
} from '../../components/SpecComponents';
import {
  SubHeaderProjectData,
} from '../../components/sub-headers/ProjectSubHeaders';
import {
  Title,
  ButtonIcon,
  Row,
  ButtonContainer,
  Button,
  ContentData,
  IconCheck,
  TextButton,
} from './ProjectCreate.styles';

const ProjectData = () => {
  const { view, newProject } = useSelector(state => state.newProject);
  const { work_types, project_types } = useSelector(state => state.app);
  const [tempNewProject, setNewProject] = useState(newProject);
  const dispatch = useDispatch();

  const onChangeProjectData = ({ name, value }) => () => {
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };
  console.log('project', newProject);

  const onChangeName = ({ target: { name, value } }) => setNewProject({ ...tempNewProject, [name]: value });

  const onSave = () => dispatch(changeView('details', tempNewProject));

  const canSave = tempNewProject.work_type.id && tempNewProject.project_type.id && tempNewProject.name;

  useEffect(() => {
    setNewProject(newProject);
  }, [newProject]);

  if (view !== 'data') {
    return <SubHeaderProjectData {...newProject} />;
  }

  return (
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
              <TextButton>
                {pt.name}
              </TextButton>
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
              <TextButton>
                {wt.name}
              </TextButton>
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
             <TextButton>
              Guardar
             </TextButton>
            </Button>
        </ButtonContainer>
      </Row>
    </ContentData>
  );
};

export default ProjectData;