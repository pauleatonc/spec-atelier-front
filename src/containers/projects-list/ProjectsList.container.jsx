import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from '../../components/project/ProjectCard';
import { getMyProjects} from './ProjectsList.actions';
import { Loading, ErrorMessage } from '../../components/SpecComponents';
import { useHistory } from 'react-router';

const ProjectsList = () => {
  const { projects, error, loading } = useSelector(state => state.projectsList);
  const { user = {} } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToSpecification = ({ id }) => history.push(`/projects/${id}/specification`); 

  useEffect(() => {
    dispatch(getMyProjects(user.id));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <div className="projects__inner__body">
      {projects &&
        projects.map(project => (
          <ProjectCard {...project} key={project.id} onClick={goToSpecification} />
        ))}
    </div>
  );
};

export default ProjectsList;