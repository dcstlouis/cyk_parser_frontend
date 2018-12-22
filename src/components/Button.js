import styled from 'styled-components';

const Button = styled.input`
  border-radius: 20px;
  background-color: rgb(100, 149, 237);
  border: 1px solid rgb(65, 105, 225);
  color: rgb(255,235,205);
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
    background-color: rgb(65, 105, 225);
    transform: translateY(1px);
  }
`

export default Button;
