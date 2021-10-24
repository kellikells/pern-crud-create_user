import React, { useEffect, useState } from 'react';

import { Item } from './Item';
// import { EditItem } from './EditItem';

export const ItemList = () => {

    const [items, setItems] = useState([]);

    const getItems = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/get/items`);
            const jsonData = await response.json();
            // const itemData = jsonData.rows;

            setItems(jsonData.rows)

            // console.log(items);
        } catch (err) {
            console.log(err.message);
        }
    }


    // const handleDelete = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/delete/item/${id}`,
    //             {
    //                 method: "DELETE"
    //             });

    //         setItems(items.filter(item => item.item_id !== id));

    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

    useEffect(() => {
        getItems();
    });


    return (
        <div className='w-full'>
            <table className='w-full justify-between bg-red-500'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {items
                        ? items.map(item => (
                            <Item
                                item={item}
                                key={item.item_id}
                            />
                        ))
                        : <tr>
                            <td>Your list is empty</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );

}

