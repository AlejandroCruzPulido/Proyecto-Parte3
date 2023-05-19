import React from "react";
import "../pilots/Pilots.css"
import "../../components/css/Style.css"

const Pilots = () => {
  const airmens = [
    {
      image: "Erich.jpg",
      name: "Erich Alfred Hartmann",
      age: "Fallecio con 71 años en el 20 de septiembre del 1993",
      history: "Erich Alfred Hartmann apodado Chico (en alemán: Bubi) por sus camaradas alemanes y El Diablo Negro (en alemán: Der Schwarze Teufel) por sus adversarios soviéticos; fue un piloto de cazas alemán durante la Segunda Guerra Mundial, considerado el mejor as de la aviación en la historia de la guerra aérea.3​ Voló en 1404 misiones y participó en 825 combates distintos. Se le acredita el derribo de 352 aviones Aliados —345 soviéticos y 7 estadounidenses— mientras servía en la Luftwaffe. En el transcurso de la guerra, se vio obligado a realizar catorce aterrizajes forzosos con su caza debido a los daños sufridos por el impacto con fragmentos de las aeronaves enemigas que había derribado o por culpa de fallos mecánicos. Nunca fue derribado o forzado a aterrizar debido a fuego enemigo."
    },
    {
      image: "Lidia.jpg",
      name: "Lidia Vladímirovna Litviak",
      age: "Fallecio con 21 años en el 1 de agosto de 1943",
      history: "Lidia Vladímirovna Litviak (en ruso: Лидия (Лилия) Владимировна Литвяк; Moscú, 18 de agosto de 1921-1 de agosto de 1943), también conocida como Lilia Litviak o la Rosa Blanca de Stalingrado, fue una piloto de caza de la Fuerza Aérea Soviética durante la Segunda Guerra Mundial. Resultaron notorias sus acciones durante la batalla de Stalingrado, dando así pie al apodo con el que pasó a la historia. Su nombre a veces es transliterado como Lidiya Litvyak, Lydia Litvak, Lilya Litvyak o Lily Litvak. A los 21 años de edad, con doce victorias en solitario y de dos a cuatro compartidas,1​2​3​ se convirtió en una de las dos ases de combate femeninos de la historia militar mundial —siendo la otra su camarada Katia Budánova—. Litviak mantiene actualmente el récord de derribos en combate real a manos de una sola mujer. Por todo ello, y habiendo desaparecido en acción durante la batalla de Kursk, fue finalmente reconocida como Heroína de la Unión Soviética."
    },
    // Agrega más pilotos aquí...
  ];

  const showAirmens = () => {
    return airmens.map((airman) => {
      return (
        <div className="pilots-list-item" key={airman.name}>
            <img src={`/assets/img/${airman.image}`} alt={airman.name} />
          <p>{airman.name} - {airman.age} - {airman.history}</p>
        </div>
      );
    });
  };

  return <div>{showAirmens()}</div>;
};

export default Pilots;













