import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__bounceInRight">loading...</p> }
            <div className="card-grid animate__animated animate__swing">                
                {
                    images.map((img) => (
                            <GifGridItem 
                            key={ img.id }
                            { ...img }
                            />
                    ))
                }
                
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
