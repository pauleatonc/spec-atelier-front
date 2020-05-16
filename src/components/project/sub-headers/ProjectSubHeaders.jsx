import React from 'react';
import { SubHeader, Label, Text, Col } from './ProjectSubHeaders.styles';

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
        <Text>{project_type.translation_spa}</Text>
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
}) => (
    <SubHeader>
      <Col>
        <Label>Detallle:</Label>
        <Text>{description}</Text>
      </Col>
      <Col>
        <Label>Ciudad</Label>
        <Text>{city.translation_spa}</Text>
      </Col>
      <Col>
        <Label>Tamaño:</Label>
        <Text>{city.size}</Text>
      </Col>
      <Col>
        <Label>Deadline:</Label>
        <Text>{city.delivery_date}</Text>
      </Col>
    </SubHeader>
  );

export const SubHeaderProjectPermission = ({
  visibility,
}) => (
    <SubHeader>
       <Col>
        <Label>Permisos</Label>
        <Text>{visibility ? 'Público' : 'Privado'}</Text>
       </Col>
    </SubHeader>
  );