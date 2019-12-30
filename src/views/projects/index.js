/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';
import { getAllProjectsAction, getOrderedProjectsAction } from '@Actions';

import HeaderProjects from '../../components/projects/header';
import Project from '../../components/projects/project';

const Projects = props => {
	removeClassAndAddCurrentToThisView();
	const { getAllProjectsMethod, getOrderedProjectsMethod, projectsArray, loader } = props;

	useEffect(() => {
    getAllProjectsMethod();
  }, []);

  const getOrderedProjects = (event) => {
    getOrderedProjectsMethod(event.target.value)
  }


	return (
		<>
			<HeaderProjects
				title="Mis proyectos"
				description="Crea y administra tus proyectos"
			/>
			{loader ? (
				<h1>Cargando</h1>
			) : (
				<section className="projects">

          <select onChange={getOrderedProjects} Style="width: 200px">
            <option value="created_at_asc">Creadas asc</option>
            <option value="created_at_desc">Creadas desc</option>
            <option value="updated_at_asc">Actualizado asc</option>
            <option value="updated_at_desc">Actualizado desc</option>
            <option value="name_asc">Nombre asc</option>
            <option value="name_desc">Nombre desc</option>
            <option value="delivery_date_asc">Fecha entrega asc</option>
            <option value="delivery_date_desc">Fecha entrega desc</option>
          </select>

					<div className="projects__inner">
						{projectsArray.map(project => (
							<Project {...project} key={project.id} />
						))}
					</div>
					{projectsArray.length >= 6 && (
						<div className="projects__footer">
							<button type="button" className="projects__footer__button-more">
								Ver más
							</button>
						</div>
					)}
				</section>
			)}
		</>
	);
};

Projects.propTypes = {
	projectsArray: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getAllProjectsMethod: PropTypes.func.isRequired,
  getOrderedProjectsMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		projectsArray: state.projects.projects,
		loader: state.projects.loader,
	}),
	dispath => ({
    getAllProjectsMethod: getAllProjectsAction(dispath),
    getOrderedProjectsMethod: getOrderedProjectsAction(dispath),
	}),
)(Projects);
