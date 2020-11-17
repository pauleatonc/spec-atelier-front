import React from 'react';
import { SubHeader, Label, Text, Col } from './ProjectSubHeaders.styles';
import { formatDate } from '../../helpers/helpers';
export const SubHeaderProjectData = ({
  name,
  project_type,
  work_type,
}) => (
    <SubHeader>
      <Col>
        <Label>Projecto:</Label>
        <Text>{name}</Text>
      </Col>
      <Col>
        <Label>Tipo:</Label>
        <Text>{project_type.name}</Text>
      </Col>
      <Col>
        <Label>Trabajo:</Label>
        <Text>{work_type.name}</Text>
      </Col>
    </SubHeader>
  );

export const SubHeaderProjectDescription = ({
  description,
  city,
  size,
  delivery_date,
  showInfo,
}) => (
    <SubHeader>
      {showInfo ? (
        <>
          <Col>
            <Label>Detallle:</Label>
            <Text>{description}</Text>
          </Col>
          <Col>
            <Label>Ciudad</Label>
            <Text>{city.name}</Text>
          </Col>
          <Col>
            <Label>Tamaño:</Label>
            <Text>{size} m2</Text>
          </Col>
          <Col>
            <Label>Deadline:</Label>
            <Text>{formatDate(delivery_date)}</Text>
          </Col>
        </>
      ) : (
          <Col>
            <Label>Detalle del Proyecto</Label>
          </Col>
        )}
    </SubHeader>
  );

export const SubHeaderProjectPermission = ({
  visibility,
  showInfo,
}) => (
    <SubHeader>
      {showInfo ? (
        <>
          <Col>
            <Label>Permisos</Label>
            <Text>{visibility ? 'Público' : 'Privado'}</Text>
          </Col>
        </>
      ) : (
          <Col>
            <Label>Permisos</Label>
          </Col>
        )}
    </SubHeader>
  );