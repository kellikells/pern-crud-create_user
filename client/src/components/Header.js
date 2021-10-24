import React from 'react'

export const Header = (props) => {
    return (
        <h2 className='text-center text-lg md:text-xl'>
            {props.title}
        </h2>
    );
}