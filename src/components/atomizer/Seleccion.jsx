import React from 'react';
// Estilo
import styled from 'styled-components';
import { StyBtn } from '../../estilos';
// Imagenes
import imgOpcionFuego from '../../img/atomizer/imgOpcionFuego.jpeg';
import imgOpcionAgua from '../../img/atomizer/imgOpcionAgua.jpeg';
// Rutas
import { useHistory } from 'react-router-dom';

const Seleccion = () => {

  const history = useHistory();
  const manejoRuta = (ruta) => {
    history.push(ruta)
  }

  const colorFuego = '#F27272';
  const colorAgua = '#345AD5';

  return (  
    <StyCajaSeleccion>
      <div className="lado">
        <img src={imgOpcionFuego} alt="imagen extincion" />
        <div className="img-overlay overlay-blur">
          <h2>Equipos para extinción</h2>
          <p className="texto texto-izq">Económico, portable y ecológico. Perfecto para un pronto ataque y comenzar a enfriar rapidamente mientras se despliegan las lineas de mayor caudal. El complemento ideal para autobombas o para pequeñas unidades de agil desplazamiento.</p>
          <StyBtn onClick={ () => manejoRuta('/Contra-Incendios') } borde={colorFuego}> Visitar </StyBtn>
        </div>
      </div>
      <div className="lado">
        <img src={imgOpcionAgua} alt="imagen de equipo" />
        <div className="img-overlay">
          <h2>Equipos de alta presión</h2>
          <p className="texto texto-der">Superiores a 1000 Bar con piezas europeas. Garantizamos horas constantes de uso y el máximo rendimiento para los rubros más exigentes. Servicio de reparación y repuestos.</p>
          <StyBtn onClick={ () => manejoRuta('/Alta-Presion') } borde={colorAgua}> Visitar </StyBtn>
        </div>
      </div>
    </StyCajaSeleccion>
  );
}

// Estilo

const StyCajaSeleccion = styled.div`
  display: flex; 
  width: 100%;
  overflow: hidden;

  .lado {
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s ease;
    }

    .img-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000b3;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      opacity: 0;
      transition: opacity 0.2s ease;

      & p,
      & h2 { /* Aplica a todos los hijos de img-overlay */
        transform: translateY(-40px);
        transition: transform 0.3s ease;
      }

      &:hover {
        opacity: 1;
        transition: opacity 0.3s ease;

        & p,
        & h2 {
          transform: translateY(0);
        }
      }

      p {
        margin: 0 15rem;
        line-height: 1.5rem;
      }
    }

    .overlay-blur:hover {
      backdrop-filter: blur(5px);
    }
  }  
`

export default Seleccion;
