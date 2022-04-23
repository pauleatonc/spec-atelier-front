import React from 'react';
import Plan from '../Plan';
import { Container, Title } from './styles';

const Plans = ({ dataPlans, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {dataPlans.map((plan) => (
        <Plan
          key={plan.id}
          type={plan.type}
          title={plan.title}
          subtitle={plan.subtitle}
          itemsInfo={plan.info}
          footerInfo={plan.footer}
          onClick={plan.onClick}
        />
      ))}
    </Container>
  );
};

export default Plans;
