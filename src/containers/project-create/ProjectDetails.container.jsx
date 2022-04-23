import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { formatDate } from 'helpers/helpers';
import SelectorRelative from 'components/basics/SelectorRelative';
import { SubHeaderProjectDescription } from 'components/sub-headers/ProjectSubHeaders';
import Input from 'components/inputs/Input';
import Textarea from 'components/inputs/Textarea';
import { ICON_ARROW_DOWN } from 'assets/Images';
import {
  changeView,
  createProject,
  modifyProject,
} from './ProjectCreate.actions';
import {
  ContentData,
  Title,
  Row,
  ButtonContainer,
  ButtonItem,
  Label,
  Text,
  InputContent,
  Section,
  Suffix,
  SelectorDate,
  SelectorDateContainer,
  InputText,
  TextValue,
  DropIcon,
} from './ProjectCreate.styles';

const ProjectDetails = () => {
  const { view, newProject } = useSelector((state) => state.newProject);
  const { cities } = useSelector((state) => state.app);
  const [tempNewProject, setNewProject] = useState(newProject);
  const dispatch = useDispatch();
  const { id } = useParams();

  const onChangeProjectData = ({ target: { name, value } }) => {
    if (name === 'size' && Number.isNaN(+value)) return;
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onSelectCity = (city) => {
    setNewProject({
      ...tempNewProject,
      city,
    });
  };

  const onSelectDeliveryDate = (delivery_date) => {
    setNewProject({
      ...tempNewProject,
      delivery_date,
    });
  };

  const onSave = () => {
    if (id) dispatch(modifyProject(tempNewProject));
    else dispatch(createProject(tempNewProject));
  };

  const onBack = () => dispatch(changeView('data', tempNewProject));

  const canSave = tempNewProject.city && !Number.isNaN(tempNewProject.size);

  const citiesOptions = cities.map((c) => ({
    label: c.name,
    value: c.id,
    ...c,
  }));

  useEffect(() => setNewProject(newProject), [newProject]);

  if (view !== 'details') {
    return <SubHeaderProjectDescription {...newProject} />;
  }

  return (
    <ContentData>
      <Title>Detalla el Proyecto</Title>
      <Text>Elige la ciudad donde se realizará tu proyecto</Text>
      <Section width="40%">
        <SelectorRelative
          name="sort"
          type="underline"
          options={citiesOptions}
          placeholder="Elige una ciudad"
          value={tempNewProject.city}
          onChange={onSelectCity}
          maxHeight="180px"
          width="200px"
          renderInput={
            <InputText>
              <TextValue>
                {tempNewProject.city.label || 'Elige una ciudad'}
              </TextValue>
              <DropIcon alt="arrow down" src={ICON_ARROW_DOWN} />
            </InputText>
          }
        />
      </Section>
      <Text>¿Qué tamaño tiene el proyecto?</Text>
      <Section width="40%">
        <InputContent>
          <Suffix value="m2">m2</Suffix>
          <Input
            width="100%"
            name="size"
            placeholder="EJ: 600"
            value={`${tempNewProject.size}`}
            onChange={onChangeProjectData}
          />
        </InputContent>
      </Section>
      <Label>Deadline</Label>
      <Section>
        <DatePicker
          selected={tempNewProject.delivery_date}
          onChange={onSelectDeliveryDate}
          customInput={
            <SelectorDate type="button" name="delivery_date">
              <SelectorDateContainer>
                {formatDate(tempNewProject?.delivery_date)}
                <i className="far fa-calendar" />
              </SelectorDateContainer>
            </SelectorDate>
          }
        />
      </Section>
      <Text>Detalla un poco más el proyecto</Text>
      <Textarea
        name="description"
        value={tempNewProject.description}
        onChange={onChangeProjectData}
      />
      <Row>
        <ButtonContainer>
          <ButtonItem variant="gray" onClick={onBack}>
            Atrás
          </ButtonItem>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonItem variant="primary" onClick={onSave} disabled={!canSave}>
            Guardar
          </ButtonItem>
        </ButtonContainer>
      </Row>
    </ContentData>
  );
};

export default ProjectDetails;
