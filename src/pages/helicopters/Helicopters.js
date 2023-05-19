import React, { useState } from "react";
import "../helicopters/Helicopters.css"
import "../../components/css/Style.css"

const Helicopters = () => {
  const choppers = [
    {
      name: "Mil Mi-26",
      image: "assets/img/Mi-26.jpg",
      description: "Es el helicóptero más grande y potente producido en serie del mundo, y se trata del helicóptero mono-rotor más grande que se haya fabricado hasta ahora, entre otras características únicas. El helicóptero prototipo bi-rotor denominado Mil Mi-12 es más grande, pero nunca se fabricó en serie.6​ Por otro lado, se trata del primero con un rotor principal de ocho palas dispuestas y en ángulo de 45 grados sexagesimales entre cada par de ellas.",
      history: "Historia del helicoptero 1Diseñado para proporcionar al ejército soviético y a la compañía Aeroflot, un helicóptero pesado para operaciones en regiones no desarrolladas del país, lugares remotos y de difícil acceso, transporte de personal, equipo y personal militar, a lo largo de todo el país, por la gran extensión territorial de la Unión Soviética. El proyecto se llevó a cabo con el liderazgo del ingeniero jefe Gennady Smirnov.7​ Entre los años 1971 y 1972, el proyecto Mi-26 (llamado en ese momento, «producto 90») con dos nuevos motores de turboeje D-136 se aprobó por el consejo científico y técnico de la URSS.7​ Este aparato comenzó su vida operativa a principios de los años setenta, tan pronto como se evidenció que el diseño experimental del helicóptero birrotor V-12, futuro Mi-12, no podría cumplir estas misiones. Requirió, sin embargo, el largo y costoso desarrollo de un sistema dinámico completamente nuevo, con rotor y sistema de transmisión adecuados, precisamente el inconveniente que el equipo de diseño Mil pretendía evitar con el diseño más complejo del anterior helicóptero V-12. En un principio se planteó el usar dos rotores como el equivalente estadounidense CH-47 Chinook o el Yak-24, pero se decidió usar el esquema clásico de un solo rotor. De esta manera se conseguía reducir de manera importante el peso del helicóptero y aumentar la capacidad de carga.",
    },
    {
      name: "NHIndustries NH90",
      image: "assets/img/NHI.jpg",
      description: "El NH90 es el primer helicóptero producido que cuenta con controles de vuelo de fly-by-wire en su totalidad. ​ Hay dos variantes principales; el Helicóptero de Transporte Táctico (TTH) para uso militar, y el Helicóptero Fragata de la OTAN (NFH), navalizado.",
      history: "Historia del helicoptero 2El NHIndustries NH90 es un helicóptero militar utilitario de tamaño medio bimotor, construido por NHIndustries, una empresa fundada por Eurocopter (62,5%), Leonardo (denominada Finmeccanica hasta 2017)2​ y Stork Fokker Aerospace. Fue desarrollado en respuesta al requerimiento de la OTAN de un helicóptero para el campo de batalla que también pudiera operar en entornos navales. El primer prototipo realizó su vuelo inaugural en diciembre de 1995; el modelo entró en servicio operativo por primera vez en 2007. Hasta junio de 2022, el NH90 ha registrado 327 053 horas de vuelo en las fuerzas armadas de trece países.3​",
    },
    // Agrega más aviones aquí...
  ];


  // Estado para almacenar el avión seleccionado
  const [chopperSelected, setChopperSelected] = useState(null);

  // Función para manejar el clic en un avión
  const handleClickChopper = chopper => {
    // Actualizar el estado con el avión seleccionado
    setChopperSelected(chopper);
  };

  return (
    <div className="helicopter-page">
      <h1>Helicópteros</h1>
      <p>Explora nuestra fascinante colección de helicópteros militares de distintos modelos y tamaños.</p>
      <ul>
        {choppers.map(chopper => (
          <li key={chopper.id} onClick={() => handleClickChopper(chopper)}>
            {chopper.name}
          </li>
        ))}
      </ul>
      {/* Mostrar información del avión seleccionado */}
      {chopperSelected && (
        <div className="helicopter-item">
          <h2>{chopperSelected.name}</h2>
          <img src={chopperSelected.image} alt={chopperSelected.name} />
          <p>{chopperSelected.description}</p>
          <p>{chopperSelected.history}</p>
        </div>
      )}
    </div>
  );
};

export default Helicopters;

