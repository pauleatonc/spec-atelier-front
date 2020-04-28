import React from 'react';
import styled from 'styled-components';
import {
  COLOR_BLACK,
} from '../../config/constants/styled-vars';

const HEADER_VIEWS = '220px';

const Container = styled.section`
  background-image: url('${({ background }) => background}');
  height: ${HEADER_VIEWS};
  width: 100%;
  color: ${COLOR_BLACK};
  font-family: 'Akzidenz Grotesk - bold condenced';
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 100%;
  width: 90%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.88px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 1px;
`;

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

