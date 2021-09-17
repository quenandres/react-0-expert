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

 AAA
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
toEqual para compara objetos
toBe para primitivos
```
