import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Input,
} from '../../../components/SpecComponents';
import {
  ContentData,
  Title,
  SubHeader,
  Row,
  ButtonContainer,
  Button,
} from '../ProjectCreate.styles';

import {
  Text,
} from './ProjectDetails.styles';
import { createProject, changeView } from '../ProjectCreate.actions';

const defaultProject = {
  name: '',
};

const ProjectDetails = () => {
  const { newProject = defaultProject } = useSelector(state => state.newProject);
  console.log('newProject', newProject);
  const [tempNewProject, setNewProject] = useState({ ...newProject });
  const dispatch = useDispatch();
  const onChangeProjectData = ({ target: { name, value } }) => {
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const onSelectProjectType = type => () => {
    setNewProject({
      ...newProject,
      type,
    })
  };

  const onSelectWorkType = workType => () => {
    setNewProject({
      ...newProject,
      workType,
    })
  };

  const onSave = () => dispatch(createProject(tempNewProject));
  const onBack = () => dispatch(changeView('data', tempNewProject))
  return (
    <>
      <SubHeader>
        <Title>
          {`Projecto: ${tempNewProject.name}`}
        </Title>
      </SubHeader>
      <ContentData>
        <Title>
          Detalla el Proyecto
        </Title>
        <Text>
          Elige la ciudad donde se realizará tu proyecto
        </Text>
        <Text>
          ¿Qué tamaño tiene el proyecto?
        </Text>
        <Input
          name="size"
          placeholder="EJ: 600m2"
          value={newProject.name}
          onChange={onChangeProjectData}
        />
        <Text>
          Deadline
        </Text>

        <Text>
          Detalla un poco más el poryecto
        </Text>

        <Row>
          <ButtonContainer>
            <Button variant="gray" onClick={onBack}>
              Atrás
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant="primary" onClick={onSave}>
              Guardar
            </Button>
          </ButtonContainer>
        </Row>
      </ContentData>
    </>
  );
};

export default ProjectDetails;