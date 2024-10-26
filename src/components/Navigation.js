import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-toggle">
          <Link href="/">
            <span className="bar">Inicio</span>
          </Link>
          <Link href="/servicios">
            <span className="bar">Servicios</span>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .mobile-menu {
          display: flex;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          background-color: rgb(229, 229, 229);
        }
        .menu-toggle {
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
