import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { useParams } from 'react-router';
import {
	accepthNotificationsAC,
  rejectNotifications
} from '../containers/projects-list/ProjectsList.actions';
import { onShowAlertSuccess } from '../containers/alert/Alert.actions';

const Projects = () => {
  const dispatch = useDispatch();
  const { isAccept, isReject } = useSelector((state) => state.auth);
  const { action , id } = useParams();
  if(action === "accept_invitation"){
    const data = {
			projectId: id,
			notifiId: id
		};
		//dispatch(accepthNotificationsAC(data));
    dispatch(
      onShowAlertSuccess({ message: 'Proyecto aceptado.' }),
    );
    //console.log("accept");
  }
  if(action === "refuse_invitation"){
    const data = {
			projectId: id,
			notifiId: id
		};
		//dispatch(rejectNotifications(data));
    dispatch(
      onShowAlertSuccess({ message: 'Proyecto rechazado.' }),
    );
    //console.log("reject");
  }
  useEffect(() => {
    if(isAccept){dispatch(onShowAlertSuccess({ message: 'Proyecto aceptado.' }))};
    //if(isReject){dispatch(onShowAlertSuccess({ message: 'Proyecto rechazado.' }))};
    //console.log(isReject);
	}, [isAccept]);

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
    </AppLayout>
  );
};

export default Projects;
