import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ROUTE_PROJECTS,
} from '../../config/constants/routes';
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
import { cleanStore } from './ProjectCreate.actions';

import { onShowAlertSuccess } from '../alert/Alert.actions';

const ProjectsCreate = () => {
  const { view, created, error, message } = useSelector(state => state.newProject);

  const history = useHistory();
  const dispatch = useDispatch();

  const steps = [
    { active: true, },
    { active: view === 'details' || view === 'permission' },
    { active: view === 'permission' },
  ];

  useEffect(() => {
    return () => dispatch(cleanStore());
  }, []);

  useEffect(() => {
    if (created) {
      dispatch(onShowAlertSuccess({ message }));
      setTimeout(() => history.push(ROUTE_PROJECTS), 2000);
    }
    if (error) {
      dispatch(onShowAlertSuccess({ message }));
    }
  }, [created, error]);

  return (
    <Container>
      <StepperContainer>
        <StepBubbles
          prefix="step-create"
          steps={steps}
        />
      </StepperContainer>
      <Content>
        <ProjectDataContainer />
        <ProjectDetailsContainer />
        <ProjectPermissionContainer />
      </Content>
    </Container>
  );
};

export default ProjectsCreate;