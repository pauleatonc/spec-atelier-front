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
import { getAppData } from '../../config/store/app-store/app.actions';
import { cleanStore } from './ProjectCreate.actions';

const ProjectsCreate = () => {
  const { view, created, error, message } = useSelector(state => state.newProject);
  const [showSnackBar, setShowSanckBar] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const steps = [
    { active: true, },
    { active: view === 'details' || view === 'permission' },
    { active: view === 'permission' },
  ];

  useEffect(() => {
    dispatch(getAppData());
    return () => dispatch(cleanStore());
  }, []);

  useEffect(() => {
    if (created) {
      setShowSanckBar(true);
      setTimeout(() => setShowSanckBar(false), 1500);
      setTimeout(() => history.push(ROUTE_PROJECTS), 2000);
    }
    if (error) {
      setShowSanckBar(true);
      setTimeout(() => setShowSanckBar(false), 2000);
    }
  }, [created, error]);

  return (
    <Container>
      {showSnackBar && (
        <SnackBar show={showSnackBar}>
          {message}
        </SnackBar>
      )}
      <StepperContainer>
        <StepBubbles
          prefix="step-create"
          steps={steps}
        />
      </StepperContainer>
      <Content>
        {view === 'data' && <ProjectDataContainer showInfo />}
        {view === 'details' && <ProjectDetailsContainer />}
        {view === 'permission' && <ProjectPermissionContainer />}
      </Content>
    </Container>
  );
};

export default ProjectsCreate;