import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { LinkSeeAll } from '../Notification.styles';

const GoProject = ({ loadingNoti, projectSpecId }) => {
  const history = useHistory();
  return (
    <LinkSeeAll
      loadingNoti={loadingNoti}
      onClick={() => history.push(`/specs/${projectSpecId}`)}
    >
      Ir al proyecto
    </LinkSeeAll>
  );
};

GoProject.defaultProps = {
  loadingNoti: false,
  projectSpecId: 0,
};

GoProject.propTypes = {
  loadingNoti: PropTypes.bool,
  projectSpecId: PropTypes.number,
};

export default GoProject;
