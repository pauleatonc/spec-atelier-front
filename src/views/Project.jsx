import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { NavbarApp } from '../components/SpecComponents';
import Footer from '../components/footer';

import ProjectsHeader from '../containers/projects-header/ProjectsHeader';
import ProjectCreateContainer from '../containers/project-create/ProjectCreate.container';
import { Container, Content } from './Project.styles';

import HEADER_IMG from '../assets/images/project/project_background_header.png';

const Project = () => {
  return (
    <AppLayout footer={<Footer />} header={<NavbarApp />}>
      <ProjectsHeader
        title="Crea un nuevo Proyecto"
        description="Información"
        background={HEADER_IMG}
      />
      <Container>
        <Content>
          <ProjectCreateContainer />
        </Content>
      </Container>
    </AppLayout>
  );
};

export default Project;
