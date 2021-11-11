import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    
    //const categories = ['One punch', 'Samurai x', 'Dragon ball'];
    
    //const [categories, setCategories] = useState(['the office']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <div>
            <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
            </>
        </div>
    )
}
