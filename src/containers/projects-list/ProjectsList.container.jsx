import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ProjectCard from '../../components/project/ProjectCard';
import { getMyProjects } from './ProjectsList.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';

const ProjectsList = () => {
  const { projects, error, loading, params } = useSelector(state => state.projectsList);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToSpecification = specID => () => history.push(`/spec/${specID}`);

  useEffect(() => {
    if (!projects.length) dispatch(getMyProjects(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!projects.length && !params.keyword) return null;

  if (!projects.length && params.keyword) return <div className="projects__inner__body" />;

  return (
    <div className="projects__inner__body">
      {!!projects.length &&
        projects.map(project => (
          <ProjectCard {...project} key={project.id} onClick={goToSpecification(project.project_spec_id)} />
        ))}
    </div>
  );
};

export default ProjectsList;
