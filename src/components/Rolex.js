import { useState, useEffect } from "react";

function Reloj({ hora }) {
  const segundos = hora.getSeconds();
  const minutos = hora.getMinutes();
  const horas = hora.getHours();

  const segundoGrado = segundos * 6;
  const minutoGrado = minutos * 6 + segundos / 10;
  const horaGrado = horas * 30 + minutos / 2;

  return (
    <div className="clock-container">
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${segundoGrado}deg)` }}
      ></div>
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minutoGrado}deg)` }}
      ></div>
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${horaGrado}deg)` }}
      ></div>
      <div className="center-point"></div>
    </div>
  );
}

const RelojEf = () => {
  const [hora, setHora] = useState(new Date());
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (esVisible) {
      temporizador = setInterval(() => {
        setHora(new Date());
      }, 1000);
    }

    return () => clearInterval(temporizador);
  }, [esVisible]);

  return (
    <>
      <h2 className="title">Reloj Analógico</h2>
      {esVisible && <Reloj hora={hora} />}
      <div className="button-container">
        <button className="button start" onClick={() => setEsVisible(true)}>
          Iniciar
        </button>
        <button className="button stop" onClick={() => setEsVisible(false)}>
          Detener
        </button>
      </div>
    </>
  );
};

export default RelojEf;
