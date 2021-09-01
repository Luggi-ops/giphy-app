import React, {useState, useEffect} from 'react';
import GifItem from './GifItem';

const GifGrid = ({category})=>{

    const [images, setImages] = useState([])
    useEffect(()=>{
        getGif();
    }, [])

    const getGif = async ()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=memes&limit=10&api_key=09KzeP3q8ZXynbTvJ87MmF5TBNQREl8d';
        const res = await fetch(url)
        const {data} = await res.json()
        
        const gifs = data.map(img =>{
                return {
                    id: img.id,
                    title: img.title,
                    img: img.images?.downsized_medium
                }
            })
        setImages(gifs);
    }

    return(
        <>
            <h3>GifGrid</h3>
            <div className="grid_gifs">
                
                {
                    images.map(image =>(
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default GifGrid;