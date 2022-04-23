import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  firstLetterToUppercase,
  handleChangeToPrettyFormat,
} from 'helpers/pretty-format.helper';
import SelectorRelative from 'components/basics/SelectorRelative';
import {
  IMAGE_COMMERCIAL_COLOR,
  IMAGE_EDUCATIONAL_COLOR,
  IMAGE_HOSPITAL_COLOR,
  IMAGE_HOTEL_COLOR,
  IMAGE_INDUSTRIAL_COLOR,
  IMAGE_REAL_STATE_COLOR,
  IMAGE_INSTITUTIONAL_COLOR,
  IMAGE_OFFICE_COLOR,
  IMAGE_RESIDENTIAL_COLOR,
  ICON_COMMERCIAL_GREY,
  ICON_EDUCATIONAL_GREY,
  ICON_HOSPITAL_GREY,
  ICON_HOTEL_GREY,
  ICON_INDUSTRIAL_GREY,
  ICON_REAL_STATE_GREY,
  ICON_INSTITUTIONAL_GREY,
  ICON_OFFICE_GREY,
  ICON_RESIDENTIAL_GREY,
} from 'assets/Images';

const mapImages = {
  commercial: IMAGE_COMMERCIAL_COLOR,
  educational: IMAGE_EDUCATIONAL_COLOR,
  institutional: IMAGE_INSTITUTIONAL_COLOR,
  real_state: IMAGE_REAL_STATE_COLOR,
  hospital: IMAGE_HOSPITAL_COLOR,
  residential: IMAGE_RESIDENTIAL_COLOR,
  office: IMAGE_OFFICE_COLOR,
  hotel: IMAGE_HOTEL_COLOR,
  industrial: IMAGE_INDUSTRIAL_COLOR,
};

const mapIconsProjectType = {
  commercial: ICON_COMMERCIAL_GREY,
  educational: ICON_EDUCATIONAL_GREY,
  institutional: ICON_INSTITUTIONAL_GREY,
  real_state: ICON_REAL_STATE_GREY,
  hospital: ICON_HOSPITAL_GREY,
  residential: ICON_RESIDENTIAL_GREY,
  office: ICON_OFFICE_GREY,
  hotel: ICON_HOTEL_GREY,
  industrial: ICON_INDUSTRIAL_GREY,
};

const mapProjectType = {
  commercial: 'Comercial',
  educational: 'Educacional',
  institutional: 'Institucional',
  real_state: 'Inmobiliario',
  hospital: 'Hospitalario',
  residential: 'Residencial',
  office: 'Oficina',
  hotel: 'Hotelero',
  industrial: 'Industrial',
};

const mapWorkType = {
  expansion: 'Expansión',
  new_building: 'Nueva obra',
  remodeling: 'Remodelación',
};

const hanlePrintImage = (type) => mapImages[type];

const handlePrintProyectType = (type) => mapProjectType[type];

const handlePrintProjectTypeIcon = (type) => (
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
  }
  return `Creado el ${handleChangeToPrettyFormat(editDate)}`;
};

const options = [
  { id: 'DELETE', label: 'Eliminar' },
  { id: 'MODIFY', label: 'Modificar' },
];

const Project = (props) => {
  const {
    name,
    project_type,
    work_type,
    created_at,
    updated_at,
    city,
    country,
    onClick,
    onChangeMenuOption,
    id,
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  const onSelect = (project) => () => onClick(project);

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
            <div>
              <SelectorRelative
                onChange={onChangeMenuOption}
                open={showOptions}
                onClose={toggleOptions}
                renderInput={
                  <i className="fas fa-ellipsis-v" onClick={toggleOptions} />
                }
                right
                width="20px"
                maxHeight="300px"
                options={options}
              />
            </div>
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
            {prettyLocationFormat(city || '', country || '')}
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
  country: PropTypes.string,
};

Project.defaultProps = {
  country: '',
};

export default Project;
