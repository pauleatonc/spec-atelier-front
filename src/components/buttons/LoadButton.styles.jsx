import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(33, 33, 33, 0.25);
  border-radius: 19.5px;
  color: #FFF;
  cursor: pointer;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 22px;
  text-align: center;

  &:active,
  &:focus {
    outline: 0;
  }

  &:active {
    background-color: rgba(33, 33, 33, 0.8);
    transform: scale(.98);
  }

  &:hover {
    background-color: rgba(33, 33, 33, 0.6);
  }
`;

export default Button;
