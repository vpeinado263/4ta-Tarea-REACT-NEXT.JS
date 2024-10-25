//Paso 1 - Importar la funcion creadora de contexto (createContext())
import { createContext, useState} from "react"

//Paso 2 - crear el contexto (aka La nave)

export const BookContext = createContext() 

const BooksContextProvider = (props) => {

   //Paso 3 - Definir la prop a despachar (aka El paquete)
  
 const [books, setBooks] = useState([

      {
        id: 1,
        title: "El señor de los Anillos"
      },

      {
        id: 2,
        title: "El club de las 5 de la mañana"
      },

      {
        id: 3,
        title: "50 sombras de gray"
      }

    ])
    
   //Paso 4 - Invocar al proveedor del context (aka El flaco de la gorra)
   //Paso 5 - Colocar la prop en value (aca Ponerle el paquete en la mano al flaco)
   //Paso 6 - DEfinir los children (aka la lista de componente que pueden acceder al paqute

  return (
   <BookContext.Provider value={books}>
    {props.children}
   </BookContext.Provider>
  )
}

export default BooksContextProvider
