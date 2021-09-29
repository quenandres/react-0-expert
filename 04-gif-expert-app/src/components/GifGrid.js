import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { loading } = useFetchGifs();
    /* const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category ).then(
            imgs => setImages(imgs)
        );
    }, [ category ]) // Segundo argumento vacio para que determine que no tiene dependencias, si tiene el argumento, se ejecuta cuando se modifica la variable
    */
    

    return (
        <>
            <h3>{category}</h3>
            { loading ? 'Cargando..' : 'Data cargada' }
            {/* <div className="card-grid">
                
                {
                    images.map((img) => (
                            <GifGridItem 
                            key={ img.id }
                            { ...img }
                            />
                    ))
                }
                
            </div> */}
        </>
    )
}
