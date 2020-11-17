import React, { useState, useEffect } from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from '../../views/Projects.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMoreProjects } from '../projects-list/ProjectsList.actions';

const ProjectsSeeMoreButton = () => {
  const { projects, loading, params, total } = useSelector(state => state.projectsList);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const onClickSeeMore = () => {
    dispatch(getMoreProjects({
      ...params,
      page: params.page + 1,
    }))
  };

  useEffect(() => {
    setShowButton(!!total && projects.length < total);
  }, [projects]);

  if (!projects.length) return null;

  return (
    <ButtonSection justify="center">
      <ButtonSection justify="center">
        <Button
          variant={showButton ? 'primary' : 'gray'}
          onClick={onClickSeeMore}
          disabled={loading || !showButton}
        >
          {showButton ? 'Ver más' : 'No hay más proyectos'}
        </Button>
      </ButtonSection>
    </ButtonSection>
  );
};

export default ProjectsSeeMoreButton;