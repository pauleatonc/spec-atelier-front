/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';
import { getAllProjectsAction, getOrderedProjectsAction } from '@Actions';
import { redirectToHomesWhenIsLogout } from '@Helpers/redirect.helper';
import HeaderProjects from '../../components/projects/header';
import Project from '../../components/projects/project';
import { getLocalStorage } from '@Helpers/localstorage.helper';

const Projects = props => {
	removeClassAndAddCurrentToThisView();
	const {
		loginState,
		getAllProjectsMethod,
		getOrderedProjectsMethod,
		projectsArray,
		loader,
		error,
	} = props;

	useEffect(() => {
		getAllProjectsMethod();

		if (!getLocalStorage('token')) {
			redirectToHomesWhenIsLogout();
		}
	}, [error, loginState]);

	const getOrderedProjects = event =>
		getOrderedProjectsMethod(event.target.value);

	return (
		<>
			<HeaderProjects
				title="Mis proyectos"
				description="Crea y administra tus proyectos"
			/>
			{loader ? (
				<h1>Cargando...</h1>
			) : !error ? (
				<section className="projects">
					<select onChange={getOrderedProjects} style={{ width: '200px' }}>
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
						{projectsArray &&
							projectsArray.map(project => (
								<Project {...project} key={project.id} />
							))}
					</div>
				</section>
			) : (
				<div className="error_container">
					<h1 className="error_container__text">
						Ha ocurrido un error, favor intentar nuevamente recargando la
						página.
					</h1>
				</div>
			)}
		</>
	);
};

Projects.propTypes = {
	loginState: PropTypes.bool.isRequired,
	projectsArray: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	loader: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	getAllProjectsMethod: PropTypes.func.isRequired,
	getOrderedProjectsMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		loginState: state.login.isLogin,
		projectsArray: state.projects.projects,
		loader: state.projects.loader,
		error: state.projects.error,
	}),
	dispath => ({
		getAllProjectsMethod: getAllProjectsAction(dispath),
		getOrderedProjectsMethod: getOrderedProjectsAction(dispath),
	}),
)(Projects);
