import React from 'react';
import AUTOMATIZA from '../../../assets/images/home/automatiza.png';
import GESTIONA from '../../../assets/images/home/gestiona.png';
import COTIZA from '../../../assets/images/home/cotiza.png';

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

const WhoWeUs = () => {
	return (
		<div className="who-we-us">
			<div className="who-we-us__section">
				<div className="who-we-us__section__inner">
					<div className="who-we-us__section__inner__icon">
						<img src={data[0].icon} alt={data[0].title} />
					</div>
					<div className="who-we-us__section__inner__info">
						<h4 className="who-we-us__section__inner__info__title">
							{data[0].title}
						</h4>
						<p className="who-we-us__section__inner__info__descent">
							{data[0].descent}
						</p>
						<p className="who-we-us__section__inner__info__description">
							{data[0].description}
						</p>
					</div>
				</div>
			</div>
			<div className="who-we-us__section">
				<div className="who-we-us__section__inner">
					<div className="who-we-us__section__inner__icon">
						<img src={data[1].icon} alt={data[1].title} />
					</div>
					<div className="who-we-us__section__inner__info">
						<h4 className="who-we-us__section__inner__info__title">
							{data[1].title}
						</h4>
						<p className="who-we-us__section__inner__info__descent">
							{data[1].descent}
						</p>
						<p className="who-we-us__section__inner__info__description">
							{data[1].description}
						</p>
					</div>
				</div>
			</div>
			<div className="who-we-us__section">
				<div className="who-we-us__section__inner">
					<div className="who-we-us__section__inner__icon">
						<img src={data[2].icon} alt={data[0].title} />
					</div>
					<div className="who-we-us__section__inner__info">
						<h4 className="who-we-us__section__inner__info__title">
							{data[2].title}
						</h4>
						<p className="who-we-us__section__inner__info__descent">
							{data[2].descent}
						</p>
						<p className="who-we-us__section__inner__info__description">
							{data[2].description}
						</p>
					</div>

				</div>
			</div>
		</div>
	);
};

export default WhoWeUs;
