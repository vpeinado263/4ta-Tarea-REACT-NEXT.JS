//Paso 1 - Importar la funcion creadora de contexto (createContext())
import { createContext, useState} from "react";

//Paso 2 - crear el contexto (aca La nave)

export const BookContext = createContext() 

const BooksContextProvider = (props) => {

   //Paso 3 - Definir la prop a despachar (aka El paquete)
  
 const [books, setBooks] = useState([

      {
        id: 1,
        title: "Abraham-Louis Breguet"
      },

      {
        id: 2,
        title: "Christiaan Huygens"
      },

      {
        id: 3,
        title: "Daniel Quare"
      },
      {
        id: 4,
        title: "John Harwood"
      },
      {
        id: 5,
        title: "Franz Ketterer"
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

export default BooksContextProvider;
