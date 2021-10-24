import React, { useState } from 'react';
import useToggle from '../hooks/useToggle';

export const EditItem = ({ item }) => {
    const [description, setDescription] = useState(item.description);

    const [isVisible, toggleIsVisible] = useToggle(false);

    const handleUpdate = async (id) => {
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/api/edit/item/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

        } catch (err) {
            console.error(err.message);
        }

    }

    return (
        <div>

            {isVisible
                ? <button
                    onClick={() => {
                        setDescription(item.description);
                        toggleIsVisible();
                    }}>
                    Close
                </button>

                : <button
                    onClick={toggleIsVisible}>
                    Edit
                </button>
            }

            <div className=
                {isVisible
                    ? "block "
                    : "hidden "
                }>

                {/* <div className='mt-2.5 mx-auto'> */}
                    <input type='text' value={description}
                        onChange={e => setDescription(e.target.value)} />

                    <button
                        onClick={() => {
                            handleUpdate(item.item_id);
                            toggleIsVisible();
                        }} >
                        Update
                    </button>
                {/* </div> */}

            </div>
        </div>
    )
}

