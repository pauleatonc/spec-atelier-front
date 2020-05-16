import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextArea,
  Input,
  Select,
} from '../../components/SpecComponents';
import {
  ContentData,
  Title,
  SubHeader,
  Row,
  ButtonContainer,
  Button,
  Text,
  InputContent,
  Section,
  Suffix,
} from './ProjectCreate.styles';
import { SubHeaderProjectData } from '../../components/project/sub-headers/ProjectSubHeaders';
import { changeView } from './ProjectCreate.actions';

const cities = [
  { id: 1, name: 'Viña del Mar' },
  { id: 2, name: 'Valparaiso' },
  { id: 3, name: 'Santiago' },
];

const ProjectDetails = () => {
  const { newProject } = useSelector(state => state.newProject);
  const { cities } = useSelector(state => state.app);
  const [tempNewProject, setNewProject] = useState({ ...newProject });
  const dispatch = useDispatch();
  const onChangeProjectData = ({ target: { name, value } }) => {
    if (name === 'size' && Number.isNaN(+value)) return;
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onSelectCity = city => {
    console.log('city', city)
    setNewProject({
      ...tempNewProject,
      city,
    })
  };

  const onSave = () => dispatch(changeView('permission', tempNewProject))
  const onBack = () => dispatch(changeView('data', tempNewProject))
  return (
    <>
      <SubHeaderProjectData {...tempNewProject} />
      <ContentData>
        <Title>
          Detalla el Proyecto
        </Title>
        <Text>
          Elige la ciudad donde se realizará tu proyecto
        </Text>
        <Section width="40%">
          <Select
            options={cities.map(c => ({ label: c, value: c, id: c }))}
            placeholder="Elige una sección"
            value={tempNewProject.city}
            onChange={onSelectCity}
          />
        </Section>
        <Text>
          ¿Qué tamaño tiene el proyecto?
        </Text>
        <Section width="40%">
          <InputContent>
            <Suffix value="m2" >
              m2
            </Suffix>
            <Input
              width="100%"
              name="size"
              placeholder="EJ: 600"
              value={tempNewProject.size}
              onChange={onChangeProjectData}
            />
          </InputContent>
        </Section>
        <br />
        <Text>
          Deadline
        </Text>
        <input type="date" />
        <br />
        <br />
        <Text>
          Detalla un poco más el proyecto
        </Text>
        <TextArea
          name="description"
          value={tempNewProject.description}
          onChange={onChangeProjectData}
        />
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
      <SubHeader>
        <Title>
          Permisos
        </Title>
      </SubHeader>
    </>
  );
};

export default ProjectDetails;
