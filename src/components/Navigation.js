import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="menu">
        <nav className="sub">
          <Link href="/">
            <span className="bar">Inicio / </span>
          </Link>
          <Link href="/relojAnalogico">
            <span className="bar">Reloj Analógico</span>
          </Link>
          <Link href="/relojDigital">
            <span className="bar">Reloj Digital</span>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .menu {
          display: flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          background-color: transparent;
        }
        .sub {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          gap: 20px; 
          padding: 10px;
          text-decoration: none;
        }
        .bar {
          color: rgb(255, 255, 255);
          font-weight: bold;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
         
        }
        .bar:hover {
          background-color: blue; 
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Navigation;
