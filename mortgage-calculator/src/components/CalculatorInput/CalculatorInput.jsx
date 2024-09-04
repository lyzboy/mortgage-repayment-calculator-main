import React from "react";
import styles from "./CalculatorInput.module.scss";

const CalculatorInput = ({
    label,
    designator,
    onLeft = true,
    value,
    onChange,
}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="containerInput" className="container__label">
                {label}
            </label>
            {onLeft ? (
                <div className={styles.mockInput}>
                    <p id="containerInput">{designator}</p>
                    <input
                        id="containerInput"
                        type="number"
                        value={value}
                        onChange={() => onchange()}
                    ></input>
                </div>
            ) : (
                <div className={styles.mockInput}>
                    <input id="containerInput" type="number"></input>
                    <p>{designator}</p>
                </div>
            )}
        </div>
    );
};

export default CalculatorInput;
