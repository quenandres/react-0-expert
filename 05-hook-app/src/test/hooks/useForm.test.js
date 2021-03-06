import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Jhonatan',
        email: 'quenandres@gmail.com'
    };

    test('compruebas los valores del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ formValues, handleInputChange, reset ] = result.current;
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('debe de cambiar el valor del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Andres'
                }
            });
        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( {...initialForm, name: 'Andres'} );
    });

    test('debe de resetear el valor del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;
        act(() => {
            reset();
        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
    });
});