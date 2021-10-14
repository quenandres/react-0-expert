import React from 'react'
import '../index.css';
import PropTypes from 'prop-types';

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__rubberBand">
            <h1>Test</h1>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

GifGridItem.prototypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
