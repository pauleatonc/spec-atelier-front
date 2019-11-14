import React from 'react';
import AUTOMATIZA from '../../../assets/images/home/automatiza.png';
import GESTIONA from '../../../assets/images/home/gestiona.png';
import COTIZA from '../../../assets/images/home/cotiza.png';

const handleCreateSections = data =>
	data.map(obj => {
		return (
			<div className="who-we-us__inner__section" key={obj.title}>
				<img
					className="who-we-us__inner__section__icon"
					src={obj.icon}
					alt={obj.title}
				/>
				<p className="who-we-us__inner__section__descent">{obj.descent}</p>
				<h1 className="who-we-us__inner__section__title">{obj.title}</h1>
				<p className="who-we-us__inner__section__description">
					{obj.description}
				</p>
			</div>
		);
	});

const WhoWeUs = () => {
	const data = [
		{
			icon: AUTOMATIZA,
			descent: 'Fácil y rápido',
			title: 'Automatiza',
			description:
				'Construye tu especificación con documentación e información técnica de las principales soluciones constructivas y productos.',
		},
		{
			icon: GESTIONA,
			descent: 'Edita tus EETT',
			title: 'Gestiona',
			description:
				'Revisa, agrega, elimina y modifica. Mantén tu especificación técnica actualizada en un solo lugar de rápida forma ordenada.',
		},
		{
			icon: COTIZA,
			descent: 'Valoriza tu proyecto',
			title: 'Cotiza',
			description:
				'Cotiza los productos utilizados en tu especificación con los principales proveedores y valoriza tu proyecto.',
		},
	];

	return (
		<div className="who-we-us">
			<div className="who-we-us__inner">{handleCreateSections(data)}</div>
		</div>
	);
};

export default WhoWeUs;
