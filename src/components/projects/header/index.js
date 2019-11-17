import React from 'react';

const HeaderProjects = props => {
	const { title, description } = props;

	return (
		<section className="header-projects">
			<div className="header-projects__inner">
				<h1 className="header-projects__inner__title">{title}</h1>
				<p className="header-projects__inner__description">{description}</p>
			</div>
		</section>
	);
};

export default HeaderProjects;
