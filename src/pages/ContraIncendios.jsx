import React from 'react';
// Componentes
import Portada from '../components/Portada';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
// Imagenes
import imgPortadaFuego from '../img/portadas/portadaFuego.jpg';
// Estilo
// import styled from 'styled-components';

const ContraIncendios = () => {

  const colorFuego = '#F27272';

  return (  
    <div className="cuerpo">
      <Portada img={imgPortadaFuego} color={colorFuego} volver={true} />
      <Contacto color={colorFuego} />
      <Footer linkActivado="extincion" />
    </div>
  );
}


 
export default ContraIncendios;