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