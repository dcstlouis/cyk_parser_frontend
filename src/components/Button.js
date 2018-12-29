import styled from 'styled-components';

const Button = styled.input`
  border-radius: 20px;
  background-color: #51A2D9;
  color: #F3EED6;
  font-size: 20px;
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  line-height: 15px;
  height: 40px;
  max-width: 100%;
  width: 30%;
  outline: none;
  margin-top: 5%;

  &:active {
    background-color: #5398D9;
    border: #5398D9;
    transform: translateY(1px);
  }
`

export default Button;
