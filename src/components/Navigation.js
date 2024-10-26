import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="menu">
        <nav className="sub">
          <Link href="/">
            <span className="bar">Inicio</span>
          </Link>
          <Link href="/relojPage">
            <span className="bar">Reloj Analógico</span>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .menu {
          display: flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          background-color: rgb(229, 229, 229);
        }
        .sub {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          gap: 20px; /* Espacio entre enlaces */
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
