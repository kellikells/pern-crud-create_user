import React, { useState } from 'react';

// import Button from 'react-bootstrap/Button';

export const AddRecipe = () => {
    const [rName, setRName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [measurement, setMeasurement] = useState(0);
    const [ingredient, setIngredient] = useState('');
    const [instruction, setInstruction] = useState('');

    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
        setIngredients(ingredients.push(ingredient))

    }

    return (
        <div>
            <h3>Add new recipe</h3>
            <form onSubmit={onSubmit}>

                <div className='form-control'>
                    <label htmlFor='rName'></label>
                    <input type='text' value={rName} onChange={(e) => setRName(e.target.value)} placeholder='recipe name...' />
                </div>

                <div className='form-control'>
                    <label htmlFor='cuisine'></label>
                    <input type='text' value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder='cuisine category' />
                </div>


                <div className='form-control'>
                    <label htmlFor='measurement'></label>
                    <input type='text' value={measurement} onChange={(e) => setMeasurement(e.target.value)} placeholder='measurement (ex: "1 cup"...)' />

                    <label htmlFor='ingredient'></label>
                    <input type='text' value={ingredient} onChange={(e) => setIngredient(e.target.value)} placeholder='ingredient' />

                    <button>+</button>
                </div>

                <div className='form-control'>
                    <label htmlFor='instruction'></label>
                    <input type='text' value={instruction} onChange={(e) => setInstruction(e.target.value)} placeholder='instructions in order (ex: "preheat oven to...")' />

                    <button>+</button>
                </div>
           
                <button type='submit'>Add recipe</button>
                
                {/* <Button 
                variant='primary'>
                    Add recipe
                </Button> */}

            </form>
        </div>

    );
}

