import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;

export const Content = styled.section`
  // position: absolute;
`;

export const Img = styled.img`
  background-image: url('${({ src = '' }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  ${({ type }) => {
    if (type === 'cover') return 'height: 100%; width: 100%;';
    if (type === 'responsive') return 'max-height: 100%; max-width: 100%; display: flex; align-items: center';
    return 'height: 100%; width: 100%;';
  }}
`;
