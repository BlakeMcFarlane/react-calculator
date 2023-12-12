import React, { useState } from 'react'
import Buttons from './Buttons'
import Screen from './Screen'

import '../App.css'


const Calculator = () => {

    const [digit, setDigit] = useState(0)

    return (
        <div className='calc-container'>
            <Screen digit={digit}/>
            <Buttons setDigit={setDigit}/>
        </div>
    )
}

export default Calculator