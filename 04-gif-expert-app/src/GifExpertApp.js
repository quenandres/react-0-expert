import React, { useState } from 'react'

export const GifExpertApp = () => {
    
    //const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    
    const [categories, setCategories] = useState(['One punch', 'Samurai x', 'Dragon ball'])

    const handleAdd = () => {
        const anime = 'Hunter x hunter';
        setCategories( [...categories, anime] );
    }

    return (
        <div>
            <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map( (category) => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
            </>
        </div>
    )
}
