import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StepsBubbles from 'components/basics/StepsBubbles';
import { ROUTE_PROJECTS } from 'config/constants/routes';
import { cleanStore } from './ProjectCreate.actions';
import { Container, StepperContainer } from './ProjectCreate.styles';

const ProjectSteps = () => {
  const { view, created } = useSelector((state) => state.newProject);
  const history = useHistory();
  const dispatch = useDispatch();

  const steps = [
    { active: true },
    { active: view === 'details' || view === 'permission' },
  ];

  useEffect(() => () => dispatch(cleanStore()), []);

  useEffect(() => {
    if (created) {
      setTimeout(() => history.push(ROUTE_PROJECTS), 2000);
    }
  }, [created]);

  return (
    <Container>
      <StepperContainer>
        <StepsBubbles prefix="step-create" steps={steps} />
      </StepperContainer>
    </Container>
  );
};

export default ProjectSteps;
