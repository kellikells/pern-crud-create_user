import React, { useState } from 'react';

export const AddForm = () => {
    const [field, setField] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { description };
            
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <label for='description' className='block text-sm font-medium text-gray-700'>Description</label>
            <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <span className='text-gray-500 sm:text-sm'>
                        $
                    </span>
                </div>
                <input type='text' name='description' id='description' className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md' placeholder='0.00'
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                    <div className='absolute inset-y-0 right-0 flex items-center'>
                        <label for='currency' className='sr-only'>Currency</label>
                        <select id='currency' name='currency' className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                    </div>
            </div>
        </div>
    )
}