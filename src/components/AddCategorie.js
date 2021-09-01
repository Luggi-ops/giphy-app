import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategorie = ({setCategories})=>{


    const [newCategorie, setNewCategorie] = useState('');
    //events
    const handleChange = (e)=>{
        setNewCategorie(e.target.value);
    }

    const addCategorie = (e)=>{
        e.preventDefault();
        if(newCategorie.trim().length > 2){
            setCategories(cat => [...cat, newCategorie]);
        }else{
            setCategories(cat => cat);
        }
        setNewCategorie('');
    }

    return(

        <>

            <form className="formCategorie" onSubmit={addCategorie}>
                <input 
                    type='text'
                    placeholder='new categorie'
                    onChange={handleChange}
                    value={newCategorie}
                />

                <button type='submit'>Add Categorie</button>

            </form>
     
        </>

    );
}

AddCategorie.propTypes= {
    setCategories: PropTypes.func.isRequired
}

export default AddCategorie;