import React from 'react';
// Estilo
import styled from 'styled-components';
import { StyBtn } from '../../estilos';
// Imagenes
import imgOpcionFuego from '../../img/atomizer/imgOpcionFuego.jpeg';
import imgOpcionAgua from '../../img/atomizer/imgOpcionAgua.jpeg';
// Rutas
import { useHistory } from 'react-router-dom';

const Seleccion2 = () => {

  const history = useHistory();
  const manejoRuta = (ruta) => {
    history.push(ruta)
  }

  const colorFuego = '#F27272';
  const colorAgua = '#345AD5';

  return (  
    <StyCajaSeleccion>
    <h1>Qué especialización te interesa?</h1>
    <h1>2222</h1>
      <div className="opcion">
        <img src={imgOpcionFuego} alt="imagen extincion" />
        <div className="bloque-texto">
          <h2>Equipos para extinción</h2>
          <p>Económico, portable y ecológico. Perfecto para un pronto ataque y comenzar a enfriar rapidamente mientras se despliegan las lineas de mayor caudal. El complemento ideal para autobombas o para pequeñas unidades de agil desplazamiento.</p>
          <StyBoton onClick={ () => manejoRuta('/Contra-Incendios') } borde={colorFuego}> Visitar </StyBoton>
        </div>
      </div>
      <div className="opcion">
        <img src={imgOpcionAgua} alt="imagen de equipo" />
        <div className="bloque-texto">
          <h2>Equipos de alta presión</h2>
          <p>Superiores a 1000 Bar con piezas europeas. Garantizamos horas constantes de uso y el máximo rendimiento para los rubros más exigentes. Servicio de reparación y repuestos.</p>
          <StyBoton onClick={ () => manejoRuta('/Alta-Presion') } borde={colorAgua}> Visitar </StyBoton>
        </div>
      </div>
    </StyCajaSeleccion>
  );
}

// Estilo 

const StyCajaSeleccion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* background-color: #EEF0F2; */
  background-color: pink;
  
  .opcion {
    display: flex;
    flex-direction: row;

    /* margin: 0 auto; */

    .bloque-texto {
      background-color: white;
      width: 50%;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const StyBoton = styled(StyBtn)`

`

export default Seleccion2;