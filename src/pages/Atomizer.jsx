import React from 'react';
// Componentes
import Portada from '../components/Portada';
import Seleccion from '../components/atomizer/Seleccion';
import Seleccion2 from '../components/atomizer/Seleccion2';
import Socios from '../components/atomizer/Socios';
import InfoPerez from '../components/atomizer/InfoPerez';
// import Contacto from '../components/Contacto';
import Contacto2 from '../components/Contacto2';
import Footer from '../components/Footer';
// Imagen
import imgPortadaAtomizer from '../img/portadas/portada.jpg';

const Atomizer = () => {

  const colorAtomizer = '#239DDB';
  const colorHover = '#39a6dd';
  const colorActivo = '#1876a5';
 
  return (  
    <div className="cuerpo">
      <Portada img={imgPortadaAtomizer} color={colorAtomizer} volver={false} />
      {/* <Seleccion /> */}
      <Seleccion2 />
      <Socios />
      <InfoPerez />
      {/* <Contacto color={colorAtomizer} /> */}
      <Contacto2 color={colorAtomizer} colorHover={colorHover} colorActivo={colorActivo} />
      <Footer />
    </div>
  );
}

export default Atomizer;