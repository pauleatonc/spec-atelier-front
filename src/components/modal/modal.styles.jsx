import styled from 'styled-components';
import {
  MEDIA_QUERY_MEDIUM,
  MEDIA_QUERY_SMALL,
  COLOR_WHITE,
} from '../../config/constants/styled-vars';

const padding = '35px';

const Root = styled.div`
  background-color: rgba(108, 108, 108, 0.5);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1002;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  background-color: ${COLOR_WHITE};
  border-radius: 4px;
  padding: ${padding};
  min-height: 200px;
  max-height: 100%;
  overflow: auto;
  position: relative;
  width: ${({ size }) => {
    if (size === 'xs') return '30%'
    if (size === 'sm') return '50%'
    if (size === 'md') return '70%'
    if (size === 'lg') return '90%'
    return '50%';
  }};
  ${MEDIA_QUERY_SMALL} {
    border-radius: 0;
    height: 100%;
    width: 100%;
    padding: ${padding};
  }
  ${MEDIA_QUERY_MEDIUM} {
    border-radius: 0;
    max-height: 100%;
    width: 90%;
    padding: ${padding - 5};
  }
`;

const ButtonClose = styled.div`
  position: absolute;
  right: ${padding};
  top: ${padding};
  cursor: pointer;
  outline: none;
`;

export {
  Root,
  Container,
  Content,
  ButtonClose,
}