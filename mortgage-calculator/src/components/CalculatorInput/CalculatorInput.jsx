import React from 'react';
import styles from './CalculatorInput.module.scss';

const CalculatorInput = ({label, designator, onLeft=true})=>{
  return(
    <div className='container'>
      <label htmlFor='container__input' className='container__label'>
        {label}
      </label>
      {onLeft ? 
      <div className={styles.mockInput}>
        <p className='mock-input__designator'>{designator}</p>
        <input className='mock-input__input' type='number'></input>
      </div> : 
      <div className={styles.mockInput}>
      <input type='number'></input>
      <p>{designator}</p>
    </div>}
    </div>
  );
}

export default CalculatorInput;