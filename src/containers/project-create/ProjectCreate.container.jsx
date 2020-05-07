import React from 'react';
import { useSelector } from 'react-redux';
import {
  StepBubbles,
} from '../../components/SpecComponents';
import ProjectDataContainer from './project-data/ProjectData.container';
import ProjectDetailsContainer from './project-detail/ProjectDetails.container';
import {
  Container,
  Content,
} from './ProjectCreate.styles';

const ProjectsCreate = () => {
  const { view } = useSelector(state => state.newProject);
  // const dispatch = useDispatch();

  // const onSave = () => dispatch(setNewProjectData('details', tempNewProject));
  return (
    <Container>
      <StepBubbles
        prefix="step-1"
        steps={[{ active: true }, { active: false }]}
        />
      <Content>
        {view === 'data' && <ProjectDataContainer />}
        {view === 'details' && <ProjectDetailsContainer />}
      </Content>
      {/* <SubHeader>
        <Title>
          Detalle del proyecto
        </Title>
      </SubHeader> */}

    </Container>
  );
};

export default ProjectsCreate;