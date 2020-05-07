import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeView } from '../ProjectCreate.actions';
import {
  Input,
} from '../../../components/SpecComponents';
import {
  Title,
  ButtonIcon,
  SubHeader,
  Row,
  ButtonContainer,
  Button,
  ContentData,
} from '../ProjectCreate.styles';

import INSTITUTIONAL from '../../../assets/images/project/icon_type/institutional.png';
import HOSPITAL from '../../../assets/images/project/icon_type/hospitalario.png';
import REAL_STATE from '../../../assets/images/project/icon_type/real_state.png';
import RESIDENTIAL from '../../../assets/images/project/icon_type/residential.png';
import COMMERCIAL from '../../../assets/images/project/icon_type/commercial.png';
import EDUCATIONAL from '../../../assets/images/project/icon_type/educational.png';

const buttonsProjectTypes = [
  { label: 'Institucional', icon: INSTITUTIONAL, active: false },
  { label: 'Hospitalario', icon: HOSPITAL, active: false },
  { label: 'Inmobiliario', icon: REAL_STATE, active: false },
  { label: 'Residencial', icon: RESIDENTIAL, active: false },
  { label: 'Comercial', icon: COMMERCIAL, active: false },
  { label: 'Educacional', icon: EDUCATIONAL, active: false },
];

const buttonsWorkTypes = [
  { label: 'Expansión', },
  { label: 'Ampliación' },
  { label: 'Obra Nueva' },
  { label: 'Remodelación' },
];

const defaultProject = {
  name: '',
};

const ProjectData = () => {
  const { newProject = defaultProject } = useSelector(state => state.newProject);
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

  const onSave = () => dispatch(changeView('details', tempNewProject));
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
          {buttonsProjectTypes.map(button => (
            <ButtonContainer key={button.label}>
              <Button onClick={onSelectProjectType(button)}>
                <ButtonIcon icon={button.icon} />
                {button.label}
              </Button>
            </ButtonContainer>
          ))}
        </Row>
        <Title>
          ¿Qué tipo de trabajo es?
        </Title>
        <Row>
          {buttonsWorkTypes.map(button => (
            <ButtonContainer key={button.label}>
              <Button onClick={onSelectWorkType(button)}>
                {button.label}
              </Button>
            </ButtonContainer>
          ))}
        </Row>
        <Row>
          <ButtonContainer>
            <Button variant="gray" onClick={onSave}>
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
    </>
  );
};

export default ProjectData;