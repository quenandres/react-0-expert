import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);
    });

    test('debe de incrementar el counter en 1', () => {
        const number = 100;
        const { result } = renderHook( () => useCounter(number) );
        const { increment } = result.current;
        // El act se necesita importar para que se ejecuten las acciones de los hooks
        act(() => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe( number + 1 );
    });

    test('debe de disminuir en 100', () => {
        const number = 100;
        const { result } = renderHook(() => useCounter(number) );
        const { decrement } = result.current;
        act(() => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe( number - 1 );
    });

    test('debe resetear en 100', () => {
        const number = 100;
        const { result } = renderHook(() => useCounter(number) );
        const { reset } = result.current;
        act(() => {
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(number);
    });

});