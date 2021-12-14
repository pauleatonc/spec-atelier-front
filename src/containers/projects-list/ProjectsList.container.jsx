import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router';
import ProjectCard from '../../components/project/ProjectCard';
import { getMyProjects, deleteProject, accepthNotificationsAC, rejectNotifications } from './ProjectsList.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import {
  getLocalStorage,
  deleteLocalStorage,
} from '@Helpers/localstorage.helper';


const ProjectsList = () => {
  const { projects, error, loading, params } = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToSpecification = specID => () => history.push(`/specs/${specID}`);
  const onChangeMenuOption = ({ id }) => opt => {
    if (opt.id === 'DELETE') dispatch(deleteProject({ id }));
    else if (opt.id === 'MODIFY') history.push(`/projects/project/${id}`);
  }
  const token = getLocalStorage('isAcceptStore');
  const resMessage = getLocalStorage('messageAcceptStore');

  useEffect(() => {
    if (!projects.length) dispatch(getMyProjects(params));
  }, []);

  const { pathname, search } = useLocation();
  const { action } = useParams();
  const array_var = search.split('=');
  const array_url = pathname.split('/');
  const data = {
    projectId: array_var[1],
    notifiId: array_url[3]
  };

  useEffect(() => {
    if (action === "accept_invitation") {
      dispatch(accepthNotificationsAC(data));
    }
    if (action === "refuse_invitation") {
      dispatch(rejectNotifications(data));
    }
  }, [action]);


  useEffect(() => {
    if (token) {
      if(token === '401'){
        dispatch(onShowAlertSuccess({ message: 'session not found' }));
      }
      if(token === '404'){
        dispatch(onShowAlertSuccess({ message: 'Not found' }));
      }
      if(token === '200'){
        dispatch(onShowAlertSuccess({ message: resMessage }));
        deleteLocalStorage('messageAcceptStore');
      }
      deleteLocalStorage('isAcceptStore');
    }
  }, [token]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!projects.length && !params.keyword) return null;

  if (!projects.length && params.keyword) return <div className="projects__inner__body" />;

  return (
    <div className="projects__inner__body">
      {!!projects.length &&
        projects.map(project => (
          <ProjectCard
            {...project}
            key={project.id}
            onClick={goToSpecification(project.project_spec_id)}
            onChangeMenuOption={onChangeMenuOption(project)}
          />
        ))}
    </div>
  );
};

export default ProjectsList;
