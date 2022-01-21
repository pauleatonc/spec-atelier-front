import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { NavbarApp } from '../components/SpecComponents';
import Footer from '../components/footer';

import ProjectsHeader from '../containers/projects-header/ProjectsHeader';
import ProjectStepsContainer from '../containers/project-create/ProjectSteps.container';
import AlertContainer from '../containers/alert/Alert.container';
import ProjectDataContainer from '../containers/project-create/ProjectData.container';
import ProjectDetailsContainer from '../containers/project-create/ProjectDetails.container';
import ProjectPermissionContainer from '../containers/project-create/ProjectPermission.container';
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
          <ProjectStepsContainer />
          <ProjectDataContainer />
          <ProjectDetailsContainer />
          {/* <ProjectPermissionContainer /> */}
        </Content>
      </Container>
      <AlertContainer />
    </AppLayout>
  );
};

export default Project;