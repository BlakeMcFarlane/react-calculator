import React from 'react'
import '../App.css';

const Screen = ({ digit }) => {


    return (
        <div className='screen-container'>
            <div className='screen-text'>
                { digit }
            </div>
        </div>
    )
}

export default Screen