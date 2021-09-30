import React from 'react'
import '../index.css';

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__rubberBand">
            <h1>Test</h1>
            <img src={ url } alt={title} />
            <p> { title } </p>
        </div>
    )
}


