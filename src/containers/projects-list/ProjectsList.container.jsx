import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from '../../components/project/ProjectCard';
import { getMyProjects } from './ProjectsList.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { useHistory } from 'react-router';

const ProjectsList = () => {
  const { projects, error, loading, params } = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToSpecification = ({ id }) => history.push(`/projects/${id}/specification`); 

  useEffect(() => {
    if (!projects.length) dispatch(getMyProjects(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!projects.length) return null;

  return (
    <div className="projects__inner__body">
      {projects.length &&
        projects.map(project => (
          <ProjectCard key={project.id} {...project} key={project.id} onClick={goToSpecification} />
        ))}
    </div>
  );
};

export default ProjectsList;