import React from 'react';
import PropTypes from 'prop-types';
import {
	firstLetterToUppercase,
	handleChangeToPrettyFormat,
} from '@Helpers/pretty-format.helper';

import COMERCIAL from '@Assets/images/project/comercial.png';
import EDUCACIONAL from '@Assets/images/project/educacional.png';
import HOSPITALARIO from '@Assets/images/project/hospitalario.png';
import INMOBILIARIO from '@Assets/images/project/inmobiliario.png';
import INSTITUCIONAL from '@Assets/images/project/institucional.png';
import RESIDENCIAL from '@Assets/images/project/residencial.png';

const mapImages = {
	residential: RESIDENCIAL,
	commercial: COMERCIAL,
	educational: EDUCACIONAL,
	office: INMOBILIARIO,
	institutional: INSTITUCIONAL,
	real_state: HOSPITALARIO,
};

const mapProjectType = {
	residential: 'Residencial',
	commercial: 'Comercial',
	educational: 'Eduacional',
	office: 'Inmobiliario',
	institutional: 'Institucional',
	real_state: 'Hospitalario',
};

const mapWorkType = {
	expansion: 'Expansión',
	new_building: 'Nueva obra',
	remodeling: 'Remodelación',
};

const hanlePrintImage = type => mapImages[type];

const handlePrintProyectType = type => mapProjectType[type];

const prettyLocationFormat = (city, country) =>
	`${firstLetterToUppercase(city)}, ${firstLetterToUppercase(country)}`;

const handlePrintEditDate = (createDate, editDate) => {
	if (createDate === editDate) {
		return 'Aún no se ha editado';
	} else {
		return `Creado el ${handleChangeToPrettyFormat(editDate)}`;
	}
};

const Project = props => {
	const {
		name,
		project_type,
		work_type,
		created_at,
		updated_at,
		city,
		country,
	} = props;

	return (
		<article className="project">
			<div className="project__header">
				<img
					src={hanlePrintImage(project_type)}
					className="project__header__image"
					alt={name}
				/>
			</div>
			<div className="project__content">
				<div className="project__content__header">
					<div className="project__content__header__top">
						<p className="project__content__header__top__title">{name}</p>
						<i className="fas fa-ellipsis-v" />
					</div>
					<div className="project__content__header__bottom">
						<p className="project__content__header__bottom__project">
							{handlePrintProyectType(project_type)}
						</p>
						<p className="project__content__header__bottom__work">
							{mapWorkType[work_type]}
						</p>
					</div>
				</div>
				<div className="project__content__body">
					<p className="project__content__body__text">
						Creada el {handleChangeToPrettyFormat(created_at)}
					</p>
					<p className="project__content__body__text">
						{prettyLocationFormat(city, country)}
					</p>
					<p className="project__content__body__text">
						{handlePrintEditDate(created_at, updated_at)}
					</p>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {
	name: PropTypes.string.isRequired,
	project_type: PropTypes.string.isRequired,
	work_type: PropTypes.string.isRequired,
	created_at: PropTypes.string.isRequired,
	updated_at: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};

export default Project;
