import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []) // Segundo argumento vacio para que determine que no tiene dependencias

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=batman&limit=10&api_key=xJw4xi7Ze2WIz1WMAEkpY9Ppnc7NUkKF';
        const resp = await fetch( url );
        const { data } = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages( gifs );
    }

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                
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
