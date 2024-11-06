import { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3 className="clock2">{hora}</h3>;
}

const RelojEffect = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (esVisible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => clearInterval(temporizador);
  }, [esVisible]);

  return (
    <>
    <div className="digitalContainer">
    <h2>Reloj Digital</h2>
       {esVisible && <Reloj hora={hora} />}
      <div className="button-container2">
        <button className="start2" onClick={() => setEsVisible(true)}>
          Iniciar
        </button>
        <button className="stop2" onClick={() => setEsVisible(false)}>
          Detener
        </button>
      </div>
    </div>
    </>
  );
};

export default RelojEffect;


