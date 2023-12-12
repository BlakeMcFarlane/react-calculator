import React, { useState } from 'react'
import '../App.css';

const Buttons = ({ setDigit }) => {

  const [val, setVal] = useState([])

  const handleClick = (value) => {

    if (value == 'd'){
      setVal([])
      setDigit(0);
    }
    else if (value === '='){
      calculate();
    }
    else if (value === '+'){
      setDigit((value));
      setVal([...val, value])
    }
    else if (value === '-'){
      setDigit((value));
      setVal([...val, value])
    }
    else if (value === 'x'){
      setDigit(value);
      setVal([...val, value])
    }
    else if (value === '/'){
      setDigit((value));
      setVal([...val, value])
    }
    else {
      setDigit(Number(value));
      setVal([...val, value])
    }
  }

  const calculate = () => {
    const expression = val.join('');
    let result = 0;
    try {
      result = Function('"use strict";return (' + expression + ')')();
    } catch (error) {
      result = 'Error';
    }

    setDigit(result);
    setVal([result]);
    }


  return (
    <div className='buttons-wrapper'>
      <button className='button-digit' onClick={() => handleClick('1')}>
          1
      </button>
      <button className='button-digit' onClick={() => handleClick('2')}>
          2
      </button>
      <button className='button-digit' onClick={() => handleClick('3')}>
          3
      </button>
      <button className='button-digit' onClick={() => handleClick('0')}>
          0
      </button>
      <button className='button-digit' onClick={() => handleClick('4')}>
          4
      </button>
      <button className='button-digit' onClick={() => handleClick('5')}>
          5
      </button>
      <button className='button-digit' onClick={() => handleClick('6')}>
          6
      </button>
      <button className='button-arithmatic' onClick={() => handleClick('d')}>
          cl
      </button>
      <button className='button-digit' onClick={() => handleClick('7')}>
          7
      </button>
      <button className='button-digit' onClick={() => handleClick('8')}>
          8
      </button>
      <button className='button-digit' onClick={() => handleClick('9')}>
          9
      </button>
      <button className='button-arithmatic' onClick={() => calculate('=')}>
          =
      </button>
      <button className='button-arithmatic' onClick={() => handleClick('+')}>
          +
      </button>
      <button className='button-arithmatic' onClick={() => handleClick('-')}>
          -
      </button>
      <button className='button-arithmatic' onClick={() => handleClick('*')}>
          x
      </button>
      <button className='button-arithmatic' onClick={() => handleClick('/')}>
          /
      </button>
    </div>
  )
}

export default Buttons