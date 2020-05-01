import React from 'react';
import PropTypes from 'prop-types';
import {
	firstLetterToUppercase,
	handleChangeToPrettyFormat,
} from '../../helpers/pretty-format.helper';

import COMMERCIAL from '../../assets/images/project/project_type/commercial.png';
import EDUCATIONAL from '../../assets/images/project/project_type/educational.png';
import INSTITUTIONAL from '../../assets/images/project/project_type/institutional.png';
import REAL_STATE from '../../assets/images/project/project_type/real_state.png';
import HOSPITALARIO from '../../assets/images/project/project_type/hospitalario.png';
import RESIDENTIAL from '../../assets/images/project/project_type/residential.png';

import COMMERCIAL_ICON from '../../assets/images/project/icon_type/commercial.png';
import EDUCATIONAL_ICON from '../../assets/images/project/icon_type/educational.png';
import INSTITUTIONAL_ICON from '../../assets/images/project/icon_type/institutional.png';
import REAL_STATE_ICON from '../../assets/images/project/icon_type/real_state.png';
import HOSPITALARIO_ICON from '../../assets/images/project/icon_type/hospitalario.png';
import RESIDENTIAL_ICON from '../../assets/images/project/icon_type/residential.png';

const mapImages = {
	commercial: COMMERCIAL,
	educational: EDUCATIONAL,
	institutional: INSTITUTIONAL,
	real_state: REAL_STATE,
	hospital: HOSPITALARIO,
	residential: RESIDENTIAL,
};

const mapIconsProjectType = {
	commercial: COMMERCIAL_ICON,
	educational: EDUCATIONAL_ICON,
	institutional: INSTITUTIONAL_ICON,
	real_state: REAL_STATE_ICON,
	hospital: HOSPITALARIO_ICON,
	residential: RESIDENTIAL_ICON,
};

const mapProjectType = {
	commercial: 'Comercial',
	educational: 'Eduacional',
	institutional: 'Institucional',
	real_state: 'Inmobiliario',
	hospital: 'Hospitalario',
	residential: 'Residencial',
};

const mapWorkType = {
	expansion: 'Expansión',
	new_building: 'Nueva obra',
	remodeling: 'Remodelación',
};

const hanlePrintImage = type => mapImages[type];

const handlePrintProyectType = type => mapProjectType[type];

const handlePrintProjectTypeIcon = type => (
	<span
		className={`project__content__header__bottom__project__content ${type}`}
	>
		<img
			src={mapIconsProjectType[type]}
			alt={type}
			className="project__content__header__bottom__project__content__icon"
		/>
		<span className="project__content__header__bottom__project__content__text">
			{handlePrintProyectType(type)}
		</span>
	</span>
);

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
		onClick,
		id,
	} = props;

	const onSelect = project  => () => onClick(project);

	return (
		<article className="project">
			<div className="project__header">
				<img
					onClick={onSelect({ id })}
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
							{handlePrintProjectTypeIcon(project_type)}
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
