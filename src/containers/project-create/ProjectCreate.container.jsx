import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StepBubbles,
} from '../../components/SpecComponents';
import ProjectDataContainer from './ProjectData.container';
import ProjectDetailsContainer from './ProjectDetails.container';
import ProjectPermissionContainer from './ProjectPermission.container';
import {
  Container,
  Content,
  StepperContainer,
} from './ProjectCreate.styles';
import { getAppData } from '../../config/store/app-store/app.actions';

const ProjectsCreate = () => {
  const { view } = useSelector(state => state.newProject);
  const dispatch = useDispatch();
  const steps = [
    { active: true, }, 
    { active: view === 'details' || view === 'permission' },
    { active: view === 'permission' },
  ];

  useEffect(() => {
    dispatch(getAppData());
  }, []);

  return (
    <Container>
      <StepperContainer>
        <StepBubbles
          prefix="step-create"
          steps={steps}
        />
      </StepperContainer>
      <Content>
        {view === 'data' && <ProjectDataContainer />}
        {view === 'details' && <ProjectDetailsContainer />}
        {view === 'permission' && <ProjectPermissionContainer />}
      </Content>
    </Container>
  );
};

export default ProjectsCreate;