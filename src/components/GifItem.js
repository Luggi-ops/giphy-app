import React from 'react';

const GifItem = ({id, img, title})=>{

    return(
        <>
            <div className="gifs animate__animated animate__fadeInLeft" key={id}>
                <img src={img.url} alt={title}/>
                <h4>{title}</h4>
            </div>
        </>
    )
}

export default GifItem;