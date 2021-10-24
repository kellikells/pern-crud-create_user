import React from 'react';

export const DeleteItem = ({id}) => {

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/delete/item/${id}`,
                {
                    method: "DELETE"
                });

            // setItems(items.filter(item => item.item_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    }



    return (
        <button onClick={() => handleDelete(id)}>Delete</button>
    )
}

