import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { NavbarApp } from '../components/SpecComponents';
import Footer from '../components/footer';

import ProjectsHeader from '../containers/projects-header/ProjectsHeader';
import ProjectsListContainer from '../containers/projects-list/ProjectsList.container';
import ProjectFilterContainer from '../containers/projects-filters/ProjectsFilters.container';
import ProjectsCreateButtonContainer from '../containers/projects-buttons/ProjectsCreateButton';
import ProjectsSeeMoreButtonContainer from '../containers/projects-buttons/ProjectsSeeMoreButton';
import ProjectsNoneContainer from '../containers/projects-list/ProjectsNone.container';
import HEADER_IMG from '../assets/images/project/project_background_header.png';

import { Container, Content } from './Projects.styles';
import AlertContainer from '../containers/alert/Alert.container';

const Projects = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavbarApp />}>
      <ProjectsHeader
        title="Mis proyectos"
        description="Crea y administra tus proyectos"
        background={HEADER_IMG}
      />
      <Container>
        <Content>
          <ProjectsCreateButtonContainer />
          <ProjectFilterContainer />
          <ProjectsNoneContainer />
          <ProjectsListContainer />
          <ProjectsSeeMoreButtonContainer />
        </Content>
      </Container>
      <AlertContainer />
    </AppLayout>
  );
};

export default Projects;
