import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderProjects from '../../components/projects/header';
import Project from '../../components/projects/project';
import { getAllProjectsAction } from '@Actions';

const Proyects = props => {
	const { getAllProjectsMethod, projectsArray } = props;

	useEffect(() => {
		getAllProjectsMethod();
	}, []);

	return (
		<>
			<HeaderProjects
				title="Mis proyectos"
				description="Crea y administra tus proyectos"
			/>
			<section className="projects">
				<div className="projects__inner">
					{projectsArray.map(project => (
						<Project key={project.id} {...project} />
					))}
				</div>
				<div className="projects__footer">
					<button className="projects__footer__button-more">Ver más</button>
				</div>
			</section>
		</>
	);
};

Proyects.propTypes = {
	projectsArray: PropTypes.array.isRequired,
	getAllProjectsMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		projectsArray: state.proyects.projects,
	}),
	dispath => ({
		getAllProjectsMethod: getAllProjectsAction(dispath),
	}),
)(Proyects);
