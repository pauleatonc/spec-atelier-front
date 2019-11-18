/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProjectsAction } from '@Actions';
import HeaderProjects from '../../components/projects/header';
import Project from '../../components/projects/project';

const Proyects = props => {
	const { getAllProjectsMethod, projectsArray, loader } = props;

	useEffect(() => {
		getAllProjectsMethod();
	}, []);

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

Proyects.defaultProps = {
	projectsArray: [],
};

Proyects.propTypes = {
	getAllProjectsMethod: PropTypes.func.isRequired,
	projectsArray: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default connect(
	state => ({
		projectsArray: state.proyects.projects,
		loader: state.proyects.loader,
	}),
	dispath => ({
		getAllProjectsMethod: getAllProjectsAction(dispath),
	}),
)(Proyects);
