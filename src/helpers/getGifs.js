

export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=09KzeP3q8ZXynbTvJ87MmF5TBNQREl8d`
    const res = await fetch(url)
    const {data} = await res.json()
    
    const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                img: img.images?.downsized_medium
            }
        })

    return gifs;
}