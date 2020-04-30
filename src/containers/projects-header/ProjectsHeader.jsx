import React from 'react';
import {
  Container,
  Content,
  Title,
  Description,
} from './ProjectHeader.styles';

const ProjectHeader = props => {
	const { title, description, background } = props;
	return (
		<Container background={background}>
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Content>
		</Container>
	);
};

export default ProjectHeader;

