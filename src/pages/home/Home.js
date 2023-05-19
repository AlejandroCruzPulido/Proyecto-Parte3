import React, { useState } from "react";
import "../home/Home.css"


const Airplanes = () => {
  const planes = [
    {
      name: "F-16 Fighting Falcon",
      image: "/assets/img/F-16.jpg",
      description: "El programa FX (siglas en inglés de Fighter Experimental, en español «caza experimental»)   que buscaba un diseño bimotor del orden de las 20 toneladas con ala de geometría variable, aviónica avanzada y misiles de largo alcance",
      history: "El Fighting Falcon es un avión especializado en el combate aéreo cercano que introdujo numerosas innovaciones, entre las que se incluyen una cabina tipo burbuja sin armazón para una mejor visibilidad, la palanca de control lateral para un mejor control bajo fuerzas G elevadas, y el asiento reclinado para reducir el efecto de las fuerzas G en el piloto. Se trata del primer avión de combate construido a propósito para soportar giros de 9 G. Su buena relación empuje a peso le proporciona potencia para incluso ascender y acelerar verticalmente, si es necesario.4​ Para llevar a cabo sus misiones dispone de un cañón automático interno M61 Vulcan y hasta 11 soportes externos para montar varios tipos de misiles, bombas, tanques de combustible suplementarios y pods (contenedores de aviónica, contramedidas, etc.).",
    },
    {
      name: "Airbus A400M Atlas",
      image: "/assets/img/Airbus.jpg",
      description: "Velocidad crucero (Vc): 780 km/h (485 MPH; 421 kt) (Mach 0,68-0,72), Alcance: 6390 km (3450 nmi; 3971 mi) con carga de 20 t, Con carga de 30 t: 4535 km (2821 mi; 2451 nmi), A plena carga: 3298 km (2049 mi; 1781 nmi), Alcance en ferry: 8700 m (28 543 ft), Techo de vuelo: 11 278 m (37 000 ft) , 12 192 m (40 000 ft) en operaciones especiales, Régimen de ascenso: 5,4 m/s (1063 ft/min), Altitud inicial de crucero: 9000 m (29 000 pies) a plena carga, Distancia de despegue táctico: 914 m (2999 pies), Distancia de aterrizaje táctico: 822 m (2697 pies), Radio de giro en tierra: 28,6 metros (94 pies)",
      history: "El Airbus A400M se ha desarrollado principalmente como sustituto de los C-130 y C-160, que actualmente son las principales aeronaves de carga de los países miembros del grupo. Una vez completado, el A400M se convertiría en el primer Airbus construido con propósito únicamente militar. Esta aeronave incrementaría la capacidad de carga y el radio de alcance en comparación con las aeronaves que iba a sustituir. La capacidad de carga se duplicaría (tanto en peso como en tamaño). Operaría en múltiples configuraciones, incluyendo transporte de carga, transporte de tropas, evacuación médica, repostaje aéreo y vigilancia electrónica. Al igual que otros aviones Airbus, el A400M tendría una cabina de cristal o glass cockpit (pantallas de funciones múltiples que presentan toda la información de los sistemas del avión) y el sistema de fly-by-wire, lo que representa un salto cualitativo en comparación con los C-130 y C-160.",
    },
  ];



  const [planeSelected, setPlaneSelected] = useState(null);

  const handleClickPlane = plane => {
    setPlaneSelected(plane);
  };


  return (
    <div className="plane-page">
      <h1>Bienvenido al Museo Alquitran</h1>
      <p>Explora nuestra colección de aviones y helicópteros militares históricos</p>

      <p>Descubre nuestra impresionante colección de aviones militares de diferentes épocas y regiones.</p>
      <ul>
        {planes.map(plane => (
          <li key={plane.id} onClick={() => handleClickPlane(plane)}>
            {plane.name}
          </li>
        ))}
      </ul>
      {planeSelected && (
        <div className="plane-object">
          <h2>{planeSelected.name}</h2>
          <img src={planeSelected.image} alt={planeSelected.name} />
          <p>{planeSelected.description}</p>
          <p>{planeSelected.history}</p>
        </div>
      )}
    </div>
  );
};


export default Airplanes;
