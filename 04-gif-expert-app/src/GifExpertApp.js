import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    
    //const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    
    const [categories, setCategories] = useState(['One punch', 'Samurai x', 'Dragon ball'])

    /* const handleAdd = () => {
        const anime = 'Hunter x hunter';
        setCategories( cats => [...cats, anime] );
    } */

    return (
        <div>
            <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

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
