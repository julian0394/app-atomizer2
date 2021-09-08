import styled from "styled-components";

export const StyBtn = styled.a`
  padding: 20px 50px;
  margin: 0 1rem;
  background-color: #111f2c;
  border: 3px solid ${props => props.borde};
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s ease;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:hover {
    background-color: ${props => props.borde};
    transition: 0.5s ease;

    user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  } 
`