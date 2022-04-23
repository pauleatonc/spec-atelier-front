import styled from 'styled-components';
import { GALLERY, SILVER_CHALICE, BOULDER } from 'config/constants/styled-vars';

export const Img = styled.img`
  background-image: url('${({ src = '' }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fill;
  ${({ type }) => {
    if (type === 'cover') return 'height: 100%; width: 100%;';
    if (type === 'responsive')
      return 'max-height: 100%; max-width: 100%; display: flex; align-items: center';
    return 'height: 100%; width: 100%;';
  }}
`;

export const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 8px 10px;
  margin: 4px 4px;
  font-size: 16px;
  background-color: ${GALLERY};
  outline: none;
  border: none;
  color: ${BOULDER};
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: ${SILVER_CHALICE};
  }
`;
