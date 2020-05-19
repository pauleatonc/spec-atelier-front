import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  TextArea,
  Input,
  Select,
  SnackBar,
} from '../../components/SpecComponents';
import {
  ContentData,
  Title,
  SubHeader,
  Row,
  ButtonContainer,
  Button,
  Label,
  Text,
  InputContent,
  Section,
  Suffix,
  SelectorDate,
  SelectorDateContainer,
} from './ProjectCreate.styles';
import { SubHeaderProjectData } from '../../components/project/sub-headers/ProjectSubHeaders';
import { changeView } from './ProjectCreate.actions';

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
    });
  };

  const onSelectDeliveryDate = delivery_date => {
    setNewProject({
      ...tempNewProject,
      delivery_date,
    })
  };

  const onSave = () => dispatch(changeView('permission', tempNewProject));
  const onBack = () => dispatch(changeView('data', tempNewProject));

  const canSave = tempNewProject.city && !Number.isNaN(tempNewProject.size);

  const citiesOptions = cities.map(c => ({ label: c.name, value: c.id, ...c }));
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
            options={citiesOptions}
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
        <Label>
          Deadline
        </Label>
        <DatePicker
          selected={tempNewProject.delivery_date}
          onChange={onSelectDeliveryDate}
          customInput={(
            <SelectorDate
              type="button"
              name="delivery_date"
            >
              <SelectorDateContainer>
                {tempNewProject.delivery_date.toLocaleDateString()}
                <i className="far fa-calendar" />
              </SelectorDateContainer>
            </SelectorDate>
          )}
        />
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
            <Button variant="primary" onClick={onSave} disabled={!canSave}>
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
