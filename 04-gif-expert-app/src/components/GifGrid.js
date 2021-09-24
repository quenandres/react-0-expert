import React, { useState, useEffect } from 'react'

export const GifGrid = ( { category } ) => {
    
    const [count, setCount ] = useState(0);

    useEffect(() => {
        getGifs();
    }, []) // Segundo argumento vacio para que determine que no tiene dependencias

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and morty&limit=10&api_key=xJw4xi7Ze2WIz1WMAEkpY9Ppnc7NUkKF';
        const resp = await fetch( url );
        const { data } = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <button onClick={ () => setCount( count + 1 ) }>+</button>
        </div>
    )
}
