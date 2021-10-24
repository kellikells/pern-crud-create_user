import React from 'react';

import { EditItem } from './EditItem';
import { DeleteItem } from './DeleteItem';

export const Item = ({ item }) => {
    return (
        <tr key={item.item_id}>
            <td className='pl-2'>
                {item.description}
            </td>

            <td className='text-center'>
                <EditItem item={item} />
            </td>

            <td className='text-center'>
                <DeleteItem id={item.item_id} />
                {/* <button onClick={() => handleDelete(item.item_id)}>Delete</button> */}
            </td>
        </tr>
    )
}