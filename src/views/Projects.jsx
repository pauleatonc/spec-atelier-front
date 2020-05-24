import React, { useState } from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { NavbarApp, Button } from '../components/SpecComponents';
import Footer from '../components/footer';
import { useHistory } from 'react-router';

import ProjectsHeader from '../containers/projects-header/ProjectsHeader';
import ProjectsListContainer from '../containers/projects-list/ProjectsList.container';
import ProjectFilterContainer from '../containers/projects-filters/ProjectsFilters.container';

import HEADER_IMG from '../assets/images/project/project_background_header.png';

import { Container, Content, ButtonSection } from './Projects.styles';

const Projects = () => {
  const history = useHistory();
  const goToNewProject = () => history.push('./projects/project');
  return (
    <AppLayout footer={<Footer />} header={<NavbarApp />}>
      <ProjectsHeader
        title="Mis proyectos"
        description="Crea y administra tus proyectos"
        background={HEADER_IMG}
      />
      <Container>
        <Content>
          <ButtonSection>
            <Button variant="primary" onClick={goToNewProject}>
              <i className="fas fa-plus" />
              &emsp;Crear nuevo
            </Button>
          </ButtonSection>
          <ProjectFilterContainer />
          <ProjectsListContainer />
        </Content>
      </Container>
    </AppLayout>
  );
};

export default Projects;
