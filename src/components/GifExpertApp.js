import React, {useState} from 'react';
import AddCategorie from './AddCategorie';
import GifGrid from './GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['memes']);

    return(

        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategorie setCategories={setCategories}/>
           
            
            <ol className="categorias">
                {
                    categories.map((category, i) => {
                        return <li key={i}>{category}</li>
                    })
                }
            </ol>

            {
                categories.map((category, i)=>{
                    return <GifGrid category={category} key={i}/>
                })
            }

            
        </>
    );
}

export default GifExpertApp;