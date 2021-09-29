import React from 'react'
import '../index.css';

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__rubberBand">
            <img src={ url } alt={title} />
            <p> { title } </p>
            {/* { img.title } */}
        </div>
    )
}
