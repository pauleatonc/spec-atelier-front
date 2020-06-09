import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Content = styled.section`
  position: absolute;
`;

export const Img = styled.img`
  background-image: url('${({ src = '' }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;