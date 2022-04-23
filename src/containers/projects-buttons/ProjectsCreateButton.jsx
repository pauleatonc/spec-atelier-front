import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ButtonSection } from 'views/Projects.styles';
import Button from 'components/buttons/Button';

const ProjectsCreateButton = () => {
  const { projects, params } = useSelector((state) => state.projectsList);
  const history = useHistory();
  const goToNewProject = () => history.push('./projects/project');
  if (!projects.length && !params.keyword) return null;

  return (
    <ButtonSection justify="flex-end">
      <Button variant="primary" onClick={goToNewProject}>
        <i className="fas fa-plus" />
        &emsp;Crear nuevo
      </Button>
    </ButtonSection>
  );
};

export default ProjectsCreateButton;
