import React from 'react';
import styles from './CalculatorInput.css';

const CalculatorInput = ({label, designator, onLeft=true})=>{
  return(
    <div className='container'>
      <label htmlFor='container__input' className='container__label'>
        {label}
      </label>
      {onLeft ? 
      <div className={`styles.mock-input`}>
        <p className='mock-input__designator'>{designator}</p>
        <input className='mock-input__input' type='number'></input>
      </div> : 
      <div className={`styles.mock-input`}>
      <input type='number'></input>
      <p>{designator}</p>
    </div>}
    </div>
  );
}

export default CalculatorInput;