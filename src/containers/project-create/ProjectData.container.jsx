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

const buttonsProjectTypes = [
  { id: 1, name: 'Institucional', icon: 'INSTITUTIONAL', active: false },
  { id: 2, name: 'Hospitalario', icon: 'HOSPITALER', active: false },
  { id: 3, name: 'Inmobiliario', icon: 'REAL_STATE', active: false },
  { id: 4, name: 'Residencial', icon: 'RESIDENTIAL', active: false },
  { id: 5, name: 'Comercial', icon: 'COMERCIAL', active: false },
  { id: 6, name: 'Educacional', icon: 'EDUCATIONAL', active: false },
];

const buttonsWorkTypes = [
  { id: 1, name: 'Expansión', },
  { id: 2, name: 'Ampliación' },
  { id: 3, name: 'Obra Nueva' },
  { id: 4, name: 'Remodelación' },
];

const defaultProject = {
  name: '',
};

const ProjectData = () => {
  const { newProject = defaultProject } = useSelector(state => state.newProject);
  const { cities, work_types, project_types } = useSelector(state => state.app);
  const [tempNewProject, setNewProject] = useState({ ...newProject });
  const dispatch = useDispatch();
  console.log('zadasda',cities, work_types )
  const onChangeProjectData = ({ target: { name, value } }) => {
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onSelectProjectType = project_type => () => {
    setNewProject({
      ...tempNewProject,
      project_type,
    })
  };

  const onSelectWorkType = work_type => () => {
    setNewProject({
      ...tempNewProject,
      work_type,
    })
  };

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
          onChange={onChangeProjectData}
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
                onClick={onSelectProjectType(pt)}
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
                onClick={onSelectWorkType(wt)}
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