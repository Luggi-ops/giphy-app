import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({category})=>{

    const {data:images, loading} = useFetchGifs(category);

    return(
        <>
            {loading && <p className="animate_animated animate__flash">Cargando...</p>}
            {<div className="grid_gifs">
                {
                    images.map(image =>(
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>}
        </>
    );
}

export default GifGrid;