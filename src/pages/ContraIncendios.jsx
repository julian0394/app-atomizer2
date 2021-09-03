import React from 'react';
import { useHistory } from 'react-router-dom';
// Componentes
import Portada from '../components/Portada';
// Imagenes
import imgPortadaFuego from '../img/portadas/portadaFuego.jpg';
// Estilo
import styled from 'styled-components';

const ContraIncendios = () => {

  const colorFuego = '#F27272';

  const history = useHistory();
  const manejoCambioRuta = (ruta)  => {
    history.push(ruta);
  }

  return (  
    <div className="cuerpo">
      <Portada img={imgPortadaFuego} color={colorFuego} volver={true} />
      <button onClick={ () => manejoCambioRuta('/') }>VOLVER</button>
    </div>
  );
}


 
export default ContraIncendios;