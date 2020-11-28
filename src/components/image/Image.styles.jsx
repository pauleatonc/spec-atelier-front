import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

export const Content = styled.section`
  position: absolute;
`;

export const Img = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  ${({ type }) => {
    if (type === 'cover') return 'height: 100%; width: 100%;';
    if (type === 'responsive') return 'max-height: 100%; max-width: 100%;';
    return 'height: 100%; width: 100%;';
  }}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;
