import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  TextArea,
  Input,
} from '../../components/SpecComponents';
import {
  ContentData,
  Title,
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
  InputText,
  TextValue,
  DropIcon,
} from './ProjectCreate.styles';
import { SubHeaderProjectDescription } from '../../components/sub-headers/ProjectSubHeaders';
import { changeView, createProject } from './ProjectCreate.actions';
import { formatDate } from '../../helpers/helpers';
import SelectorRelative from '../../components/basics/SelectorRelative';
import dropArrowSource from '../../assets/images/icons/drop-arrow.svg';

const ProjectDetails = () => {
  const { view, newProject } = useSelector(state => state.newProject);
  const { cities } = useSelector(state => state.app);
  const [tempNewProject, setNewProject] = useState(newProject);
  const dispatch = useDispatch();
  const onChangeProjectData = ({ target: { name, value } }) => {
    if (name === 'size' && Number.isNaN(+value)) return;
    setNewProject({
      ...tempNewProject,
      [name]: value,
    });
  };

  const onSelectCity = city => {
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
  // const onSave = () => dispatch(changeView('permission', tempNewProject));

  const onSave = () => dispatch(createProject(tempNewProject));
  const onBack = () => dispatch(changeView('data', tempNewProject));

  const canSave = tempNewProject.city && !Number.isNaN(tempNewProject.size);

  const citiesOptions = cities.map(c => ({ label: c.name, value: c.id, ...c }));

  useEffect(() => {
    setNewProject(newProject);
  }, [newProject]);

  if (view !== 'details') {
    return <SubHeaderProjectDescription {...newProject} />;
  }

  return (
    <ContentData>
      <Title>
        Detalla el Proyecto
            </Title>
      <Text>
        Elige la ciudad donde se realizará tu proyecto
            </Text>
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
          renderInput={(
            <InputText>
              <TextValue>
                {tempNewProject.city.label || 'Elige una ciudad'}
              </TextValue>
              <DropIcon alt="" src={dropArrowSource} />
            </InputText>
          )}
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
      <Section>
        <DatePicker
          selected={tempNewProject.delivery_date}
          onChange={onSelectDeliveryDate}
          customInput={(
            <SelectorDate
              type="button"
              name="delivery_date"
            >
              <SelectorDateContainer>
                {formatDate(tempNewProject?.delivery_date)}
                <i className="far fa-calendar" />
              </SelectorDateContainer>
            </SelectorDate>
          )}
        />
      </Section>
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
  );
};

export default ProjectDetails;
