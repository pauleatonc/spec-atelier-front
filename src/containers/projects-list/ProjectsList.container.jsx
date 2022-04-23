import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ProjectCard from 'components/project/ProjectCard';
import Loading from 'components/basics/loading';
import ErrorMessage from 'components/basics/ErrorMessage';
import { getMyProjects, deleteProject } from './ProjectsList.actions';

const ProjectsList = () => {
  const { projects, error, loading, params } = useSelector(
    (state) => state.projectsList,
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const goToSpecification = (specID) => () => history.push(`/specs/${specID}`);

  const onChangeMenuOption = ({ id }) => (opt) => {
    if (opt.id === 'DELETE') dispatch(deleteProject({ id }));
    else if (opt.id === 'MODIFY') history.push(`/projects/project/${id}`);
  };

  useEffect(() => {
    if (!projects.length) dispatch(getMyProjects(params));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!projects.length && !params.keyword) return null;

  if (!projects.length && params.keyword)
    return <div className="projects__inner__body" />;

  return (
    <div className="projects__inner__body">
      {!!projects.length &&
        projects.map((project) => (
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
