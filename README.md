# React
**Seccion 5 Pruebas unitarias y de integracion.**
- AAA
    - Arrange - Arreglar
    - Act - Actuar
    - Assert - Afirmar
- Jest
- Expect
- toBe
- Enzyme
- Comandos de terminal para pruebas

*Pruebas unitarias:*
 - Faciles de escribir
 - Faciles de leer
 - Confiables
 - Rapidas
 - Principalmente unitarias

*Pruebas de integración:*
 - Se confirma que todos los componentes probados individualmente se integren bien entre todos.

 ## AAA
 - Arrange
    * Inicializamos variables
    * Importaciones necesarias
 - Act
    * Llamar métodos
    * Simular clicks
    * Realizar acciones sobre el paso anterior
 - Assert
    * Son los resultados esperados
    * Que cambie algo, que incremente otra cosa

* 50. Mi primera prueba *
```
test('should ', () => { // Primer parametro, nombre del test, segundo callback

})
```

```
npm run test // Ejecuta todos los archivos que terminen en .test.js
```

```
describe('Pruebas del archivo demo.test.js', () => {
    test('Deben ser iguales los strings', () => {
        // 1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    })
});
```

```
toEqual para comparar objetos
toBe para primitivos
```

### Enzyme
Se instala enzyme-to-json
"@wojtekmaj/enzyme-adapter-react-17": "^0.6.3", // Esta version viene de un repositorio externo que hacer que funcione mientras sale la version de enzyme para react 17
"enzyme": "^3.11.0",
"enzyme-to-json": "^3.6.2"



- wrapper: tiene la informacion del componente renderizada para que pueda ser utilizada y comparada desde el test.

# ***Seccion 6 GifExpertApp - Aplicacion.***
# Temas
- Custom Hooks
- Fetch hacia un API
- Comunicación entre componentes
- Clases de CSS
- Animaciones
- Enviar métodos como argumentos
- Crear listados
- keys
- Giphy
Esta es una aplicación pequeña pero muy ilustrativa que explica cómo utilizar React + customHooks para poder resolver necesidades en específico que podremos re-utilizar después.
```
<AddCategory setCategories={ setCategories }/>
```
Se envia el props llamado setCategories
```
export const AddCategory = ( {setCategories} ) => {
```
Se recibe al iniciar la funcion pasada como un parametro desestructurado { setCategories }
# 
```
import PropTypes from 'prop-types'; // ES6
- 1. Se pone el nombre del componente y se modifican los campos que se necesiten
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };

```

### Hook useEffect
Nos ejecutar el codigo de manera condicional, si existen cambios en alguna variable que definamos.

### Custom Hook
Una forma de extraer logica que se quiere reutilizar

Para animaciones rapidas
https://animate.style/


## Profundizando Hooks
Operador spread: ...
```
const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>

            <button 
                className="btn btn-primary" 
                onClick={()=>{
                    setState({
                        ...state, // Operador spread
                        counter1: counter1 + 1
                    });
                }}
            >
                +1
            </button>
        </>
    )
```
Utilizado para que el nuevo valor no se pare encima del valor actual del state

## Link Dev
 - https://dev.to/dev117uday/react-hooks-0-to-hero-4b7o
### 106. useCounter - CustomHook
>Se crea un Hook personalizado que nos brinda las funciones para incrementar, decrementar y resetear el valor del state

### 107. useEffect - SimpleForm
> El hook useEffect permite ejecutar efecto secundario cuando algo suceda

```
    useEffect(() => {
        console.log('hey');
    }, []);
```
Si se le manda el parametro vacio, solo se ejecutara una sola vez, se pueden poner mas de un useEffect, para cambios especificos

### 108. useEffect unmount - Cleanup
- No se pueden usar hooks condicionados

```
    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
        }
    }, [])
```
la funcion del return en el useEffect es como el antiguo componentDismounted de react.

### 109. useEffect - Precauciones
Se crea una funcion para la accion del event listener para que cuando sea finalizado el useEffect este cierre la relacion con el evento.

### 110. Formulario con custom Hook
Custom Hook: donde nosotros creamos la funcionalidad del hook que necesitamos.

### 111. useFetch - CustomHook
Por medio de un useEffect, hacemos llamado al api

### 112. useFetch + useCounter
```!!``` Esta doble negacion se usa en los valores de null para definir si es true o false
```
!null = true
!!null = false
```
Conecto funcionamiento de hook counter, para crear un paginador

### 113. useRef - Primer uso
Definimos como referencia a una etiqueta y podemos manejar acciones del input

### 114. useRef - Caso de uso real
Definimos isMounted como una referencia, la ponemos en el return del useEffect para que cuando se desmonte el componente cambie el valor de isMounter a false y asi no ejecute el useState.

### 115. useLayoutEffect
Con ayuda del useRef, definimos un parrafo como referencia para cuando el width del p cambie de tamaño

### 116. Memo - Método de React
Especifica que un componente solo se va a renderizar si alguna de sus propiedades cambia, de lo contraria va a memorizar el componente

### 117. useMemo
```
useMemo(() => procesoPesado(counter), [ counter ]);
```
Nos brinda un callback para poner la operacion que necesitemos que se recuerde y nos brinda un array para especificar en que momentos se debe volver a llamar dicha funcion

### 118. useCallback
 El uso de este callback son 2 principalmente
  * 1. Cuando se necesita enviar una funcion a un componente hijo
  * 2. Para cuando se usa un use Effect, y el efecto es la funcion tambien se debe poner useCallback por que si no, se estara llamando cada vez que se renderice la funcion.


## Seccion 10 Profundizando Hooks - useReducer
- Temas
    * useReducer
    * Reducers
    * Teoría de un reducer
    * Aplicación de TODOs
    * CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.

¿Que es Reducer?
1. Es una funcion que no puede ser asincrona
2. Debe ser una funcion pura, se debe resolver de manera interna
   1. Debe resolver todo su proceso por si mismo, sin depender de otras funciones
   2. No debe realizar tareas asincronas
   3. Debe retornar siempre un estado nuevo
   4. No debe llamar localStorage o sessionStorages
   5. No debe de requerir mas que una accion que puede tener un argumento
3. Debe retornar un nuevo estado
4. Usualmente solo recibe 2 argumentos
   1. El valor inicial (initialState) y la accion a ejecutar

### 124. Idea general de un reducer - Vía código
Para manejar acciones de reducer, existe un estandar en el que se define el type del reducer y el payload(Valores nuevos que se envian)
```
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => { //Las acciones son las que van a modificar el state
    
    if( action?.type == 'agregar' ){ // Quien va a modificar el state
        return [ ...state, action.payload ]
    }
    
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'agregar',
    payload: newTodo //Estandar para que otros desarrolladores trabajen con el payload
}

todos = todoReducer( todos, action );

console.log(todos);
```

### 125. useReducer - Todo List
El use reducer, funciona similar a un useState, con la diferencia que esta hecho para proceso mas grandes, lo mas aconsejable es utilizar el useState cuando el proceso no sea complejo
```
    const [state, dispatch] = useReducer(reducer, initialState, init)
    - initialState: Estado inicial
    - init: Function para inicializar el state, en caso de que se hagan varias acciones
    - dispatch: Ayudara a disparar las acciones hacia el reducer
```

### 127. Agregar un nuevo TODO
La funcion dispatch, sabe a que reducer pertenece y puede ser enviada como parametro a hijos

### 128. Guardar TODOs en LocalStorage
Interaccion de init de reducer y effect combinados para guardar info en localstorage

### 129. Borrar un TODO
Creamos un case en el todoReducer, que haga la accion de eliminacion, como el effect detecta cambio en los state, se ejecuta nuevamente para guardar los todo en el local storage.

### 130. Toggle Todo - Marcar como completado o pendiente un TODO
Se crea un nuevo case para marcar como hecha las tareas al enviarsele el action al dispatch

## Sección 11 - Profundizando Hooks . useContext
¿Qué veremos en esta sección?

- Context
- Provider
- useContext
- React Router
- Links y NavLinks
- CreateContext
- SPA ( Single Page Application )

* El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.

### 140. CreateContext y useContext
Se crea componente Usercontext 'createContext'
que es un higher-order component
```
import { createContext } from 'react';

export const UserContext = createContext(null);
```

Lo importamos en un componente que contenga los demas como hijos y lo ponemos como padre de este
```
import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const user = {
        id: 123,
        name:'Andres',
        email: 'Mejia@mail.com'
    }
    return <div>
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    </div>;
};
```

### 141. useContext
Se realizan ejemplos para comprobar funcionamiento de useContext, pasando informacion entre componentes.

## Pruebas unitarias y de integracion Custom hooks
### ¿Qué veremos en esta sección?

- Pruebas sobre Hooks y CustomHooks

- Ese es el tema principal, demostrar cómo podemos evaluar cada unos de los hooks aplicados anteriormente con sus casos reales de uso.

- Hay varios extras, como la prueba de un Reducer, que realmente no es nada complicado, también quiero aclarar qué nos toca evaluar a nosotros y qué no es responsabilidad nuestra.

### 145. Inicio de proyecto - Pruebas sobre Hooks
- Se instalan:
  - enzyme
  - enzyme-to-json
  - react-hooks-testing-library


### 151. Pruebas con múltiples hooks simultáneos
 Se implementa un mock para revisar la información.
 ``` jest.mock('../../../hooks/useFetch'); ```
 Implementamo mock, para poner informacion por default, para que el componente nos funcione sin hacer verdadero llamado a los hooks.