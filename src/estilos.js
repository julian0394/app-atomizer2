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
  } 
`

export const StyBtnSolido = styled.button`
  padding: 1rem 2.5rem;
  cursor: pointer;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  margin-bottom: 2rem;

  span {
    margin-left: 0.3rem;
  }

  &:hover {
    background-color: ${props => props.colorHover};
    border-color: ${props => props.colorHover};
  }

  &:active {
    background-color: ${props => props.colorActivo};
    border-color: ${props => props.colorActivo};
  }
`