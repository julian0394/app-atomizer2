import React from 'react';
import ingPerez from '../../img/atomizer/ingPerez.jpeg';
// Estilo
import styled from 'styled-components';

const InfoPerez = () => {
  return (  
    <StyledInfoPerez>
      <img src={ingPerez} alt="Foto de Luis Perez" />
      <div className="descripcion-perez">
        <h2>ING. LUIS A. PÉREZ</h2>
        <p>Ingeniero en seguridad ambiental, Licenciado en higiene y seguridad en el trabajo, ex bombero voluntario de Gral. San Martín. Más de 10 años de experiencia en el diseño y desarrollo de equipos de alta presión y pionero de la extinción de fuegos con agua atomizada.</p>
      </div>
    </StyledInfoPerez>
  );
}

// ESTILOS
const StyledInfoPerez = styled.div`
  background-color: #2B2B30;
  display: flex;
  padding: 3rem 0;
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: center;

  img {
    height: 12rem;
    width: 12rem;
    /* padding: 0;
    margin: 0; */
    object-fit: cover;
    border-radius: 50%;
    margin-right: 2rem;
  }

  .descripcion-perez {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    width: 40%;
    
    h2 {
      color: #239DDB;
      text-align: left;
      margin-top: -2rem;
      margin-bottom: 1rem;
    }

    p {
      color: lightgrey;
      font-weight: 300;
      font-style: italic;
      /* width: 40%; */
      /* margin: 0 auto; */

    }
  }
`
 
export default InfoPerez;