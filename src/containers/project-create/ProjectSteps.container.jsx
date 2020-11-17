import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ROUTE_PROJECTS,
} from '../../config/constants/routes';
import {
  StepBubbles,
} from '../../components/SpecComponents';
import {
  Container,
  StepperContainer,
} from './ProjectCreate.styles';
import { cleanStore } from './ProjectCreate.actions';

const ProjectSteps = () => {
  const { view, created } = useSelector(state => state.newProject);

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
      setTimeout(() => history.push(ROUTE_PROJECTS), 2000);
    }
  }, [created]);

  return (
    <Container>
      <StepperContainer>
        <StepBubbles
          prefix="step-create"
          steps={steps}
        />
      </StepperContainer>
    </Container>
  );
};

export default ProjectSteps;