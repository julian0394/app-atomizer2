import React from 'react';
// Estilo
import styled from 'styled-components';
import { StyBtn } from '../../estilos';

const Socios = () => {

  const colorAtomizer = '#239DDB';

  return (  
    <StyledSocios>
      <h2>¿Te interesa comercializar nuestros equipos?</h2>
      <p>Ponete en contacto con nosotros, comentanos tu zona, tus experiencias y escucharemos tus propuestas.</p>
      <p className="negrita">Buscamos formar un grupo en donde la profesionalidad y la calidad humana resalte a la par que el nivel de nuestros equipos. </p>
      <StyBtn borde={colorAtomizer}>CONTACTANOS</StyBtn>
    </StyledSocios>
  );
}

// ESTILOS
const StyledSocios = styled.div` 
  background-color: white;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  text-align: center;
  padding: 3rem 0;

  p {
    line-height: 1.5rem;
  } 

  h2, p {
    margin: 0 auto;
    width: 90%;
  }

  button {
    margin-top: 3rem;
    margin-bottom: 0.3rem;
  }
`
 
export default Socios