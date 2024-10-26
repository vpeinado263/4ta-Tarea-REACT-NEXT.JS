import { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3 className="clock">{hora}</h3>;
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
      <h2 className="title">Reloj con efecto</h2>
      {esVisible && <Reloj hora={hora} />}
      <div className="button-container">
        <button className="button start" onClick={() => setEsVisible(true)}>
          Iniciar
        </button>
        <button className="button stop" onClick={() => setEsVisible(false)}>
          Detener
        </button>
      </div>

      <style jsx>{`
        .title {
          font-size: 1.8em;
          color: #333;
          margin-bottom: 15px;
        }

        .clock {
          font-size: 2em;
          font-weight: bold;
          color: #0070f3;
          margin: 20px 0;
        }

        .button-container {
          display: flex;
          gap: 10px;
        }

        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .start {
          background-color: #0070f3;
          color: #fff;
        }

        .stop {
          background-color: #ff4d4d;
          color: #fff;
        }

        .button:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
};

export default RelojEffect;
