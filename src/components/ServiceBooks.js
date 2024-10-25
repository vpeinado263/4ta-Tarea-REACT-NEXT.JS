//Paso 1 - importar el contexto (aka la Nave aterrizo)

import { BookContext } from "@/context/BooksContextProvider"

//Passo 2 - Importar el hook de contexto (aka El cartero -  Una llave)
import { useContext } from "react";


const ServiceBooks = () => {

  //Paso 3 - Extraer la prop del contexto usando el hook
  const  books = useContext(BookContext);
  
  return (
  <ul>  
    {
      books.map(book => <li key={book.id}>{book.title}</li>)
    }
  </ul>
  )
}

export default ServiceBooks;