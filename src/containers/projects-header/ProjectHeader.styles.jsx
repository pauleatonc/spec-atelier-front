import styled from 'styled-components';
import {
    COLOR_BLACK,
} from '../../config/constants/styled-vars';

const HEADER_HEIGHT = '220px';

export const Container = styled.section`
  background-image: url('${({ background }) => background}');
  height: ${HEADER_HEIGHT};
  width: 100%;
  color: ${COLOR_BLACK};
  font-family: 'Akzidenz Grotesk - bold condenced';
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 100%;
  width: 90%;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.88px;
  text-transform: uppercase;
`;

export const Description = styled.p`
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