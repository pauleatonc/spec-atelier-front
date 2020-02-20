/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';
import { getAllProjectsAction, getOrderedProjectsAction } from '@Actions';
import { redirectToHomesWhenIsLogout } from '@Helpers/redirect.helper';
import HeaderProjects from '../../components/projects/header';
import Project from '../../components/projects/project';
import { getLocalStorage } from '@Helpers/localstorage.helper';

const selectElements = [
	{
		option: 'created_at_asc',
		value: 'Creadas asc',
	},
	{
		option: 'created_at_desc',
		value: 'Creadas desc',
	},
	{
		option: 'updated_at_asc',
		value: 'Actualizado asc',
	},
	{
		option: 'updated_at_desc',
		value: 'Actualizado desc',
	},
	{
		option: 'name_asc',
		value: 'Nombre asc',
	},
	{
		option: 'name_desc',
		value: 'Nombre desc',
	},
	{
		option: 'delivery_date_asc',
		value: 'Fecha entrega asc',
	},
	{
		option: 'delivery_date_desc',
		value: 'Fecha entrega desc',
	},
];

const getOrderedProjects = (event, method) => method(event.target.value);

const handlePrintSelect = method => (
	<select
		onChange={e => {
			getOrderedProjects(e, method);
		}}
		className="projects__inner__header__filters__content__select"
	>
		{selectElements.map(ele => (
			<option key={ele.option} value={ele.option}>
				{ele.value}
			</option>
		))}
	</select>
);

const Projects = props => {
	removeClassAndAddCurrentToThisView();
	const [search, setSearch] = useState('');
	const {
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
	}, [error]);

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
					<div className="projects__inner">
						<div className="projects__inner__header">
							<div className="projects__inner__header__create">
								<button className="projects__inner__header__create__button">
									<i className="fas fa-plus" />
									Crear nuevo
								</button>
							</div>

							<div className="projects__inner__header__filters">
								<label className="projects__inner__header__filters__label">
									<i className="fas fa-search" />
									<input
										type="text"
										name="search"
										className="projects__inner__header__filters__label__input"
										value={search}
										onChange={e => setSearch(e.target.value)}
										placeholder="Busca un proyecto..."
									/>
								</label>
								<div className="projects__inner__header__filters__content">
									<span className="projects__inner__header__filters__content__text">
										Ver por:
									</span>{' '}
									{handlePrintSelect(getOrderedProjectsMethod)}
								</div>
							</div>
						</div>

						<div className="projects__inner__body">
							{projectsArray &&
								projectsArray.map(project => (
									<Project {...project} key={project.id} />
								))}
						</div>
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
	projectsArray: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	loader: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	getAllProjectsMethod: PropTypes.func.isRequired,
	getOrderedProjectsMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		projectsArray: state.projects.projects,
		loader: state.projects.loader,
		error: state.projects.error,
	}),
	dispath => ({
		getAllProjectsMethod: getAllProjectsAction(dispath),
		getOrderedProjectsMethod: getOrderedProjectsAction(dispath),
	}),
)(Projects);
