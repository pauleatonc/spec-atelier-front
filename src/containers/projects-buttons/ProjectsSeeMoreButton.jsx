import React, { useState, useEffect }  from 'react';
import { Button } from '../../components/SpecComponents';
import { ButtonSection } from '../../views/Projects.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getMyProjects } from '../projects-list/ProjectsList.actions';

const ProjectsSeeMoreButton = () => {
  const { projects, loading, error, params, total } = useSelector(state => state.projectsList);
  const [seeMoreCount, setSeeMoreCount]  = useState(0);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const getMoreProjects = () => {
    dispatch(getMyProjects({ 
      ...params,
      page: params.limit * seeMoreCount,
    }))
  };

  useEffect(() => {
    if (!error) setSeeMoreCount(setSeeMoreCount + 1);
    setShowButton(!!total && projects.length < total); 
  }, [projects, error]);

  if (!projects.length) return null;

  return (
    <ButtonSection justify="center">
      {showButton && (
        <Button 
          variant="primary" 
          onClick={getMoreProjects} 
          disabled={loading}
        >
          Ver más
        </Button>
      )}
    </ButtonSection>
  );
};

export default ProjectsSeeMoreButton;