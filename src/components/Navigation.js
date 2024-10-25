import Link from "next/link"



const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">Inicio</Link>
        <Link  href="/servicios">Servicios</Link>
      </nav>
    </>
  )
}

export default Navigation