# 4ta-Tarea-REACT-NEXT.JS

Este proyecto es un blog de relojes, cubriendo temas como los diferentes tipos de relojes y su historia, incluyendo quién fue el primero en crearlo. A través de esta tarea, aplico los conceptos como el uso del contexto, el ciclo de vida de los componentes hooks.

## Descripción del Proyecto

El blog está desarrollado utilizando **React** y **Next.js**, aprovechando el sistema de componentes para organizar la información de manera modular. Utilizo el contexto de React para gestionar estados globales, y los hooks para manejar el ciclo de vida y otras funcionalidades de los componentes.

## Contenidos del Blog

1. **Introducción al Reloj**  
   - Una descripción de lo que es un reloj, sus tipos y una breve historia.

2. **Tipos de Relojes**  
   - Explicación de los tipos de relojes, desde relojes de pulsera y de pared hasta los relojes digitales y análogos.

3. **Primeros Relojes**  
   - Un apartado dedicado a la historia del primer reloj y quién fue su creador.

## Conceptos Aprendidos y Aplicados en el Proyecto

### 1. Contexto en React

El **contexto** en React permite crear un "proveedor" de datos globales para los componentes, sin necesidad de pasar propiedades de forma manual. En este proyecto, el contexto se emplea para centralizar el manejo de ciertos datos.

- **Hermanos y Hijos**: Componentes en el mismo nivel (hermanos) y componentes anidados (hijos) pueden acceder al contexto sin props.
- **Provider y Children**: El contexto utiliza un proveedor que envuelve los componentes, lo que facilita el acceso a datos globales.
- **useContext**: Este hook permite acceder a los valores del contexto desde cualquier componente de forma sencilla.

### 2. Ciclo de Vida de un Componente en React

Los componentes en React siguen un ciclo de vida dividido en tres fases: montaje, actualización y desmontaje.

- **Montaje**: El componente se crea y se inserta en el DOM. 
- **Actualización**: Se producen cambios en el estado o las props, y el componente se vuelve a renderizar.
- **Desmontaje**: El componente se elimina del DOM.

### 3. Hooks en React para el Ciclo de Vida

Para los componentes funcionales, se utilizan hooks en lugar de los métodos clásicos de ciclo de vida:

- **useEffect**: Este hook permite ejecutar efectos secundarios cuando un componente se monta, actualiza o desmonta. En el proyecto, se utiliza `useEffect` para inicializar y limpiar efectos como los relojes en el blog.

in process : https://4ta-tarea-react-next-js.vercel.app/
