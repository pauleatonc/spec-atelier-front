import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import {
  ROUTE_PROJECTS,
} from '../../config/constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import {
  StepBubbles,
  SnackBar,
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

const ProjectsCreate = () => {
  const { view, created, error, message } = useSelector(state => state.newProject);
  const [showSnackBar, setShowSnackBar] = useState(false);

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
      setShowSnackBar(true);
      setTimeout(() => setShowSnackBar(false), 1500);
      setTimeout(() => history.push(ROUTE_PROJECTS), 2000);
    }
    if (error) {
      setShowSnackBar(true);
      setTimeout(() => setShowSnackBar(false), 2000);
    }
  }, [created, error]);

  return (
    <Container>
      <SnackBar show={showSnackBar}>
        {message || null}
      </SnackBar>
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