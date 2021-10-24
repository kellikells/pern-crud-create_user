import React, { useState } from 'react';

export const AddItem = () => {
    // const [b1, setB1] = useState('');
    // const [b2, setB2] = useState('');

    const [description, setDescription] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/api/post/item', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // this will refresh the page
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (

        <div className='bg-red-400 p-3 w-full' >
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-1'>

                    <input
                        type='text'
                        className='form-control border-1 border-gray-400 py-1 pl-2'
                        placeholder='add items here...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='bg-green-400 py-1 rounded-lg font-bold'
                    >Add</button>
                </div>
            </form>
        </div>
    )
}